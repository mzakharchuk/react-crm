let bots = JSON.parse(localStorage.getItem('bots')) || [];
    
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // register bot
                if (url.endsWith('/bot/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newBot = JSON.parse(opts.body);

                    // validation
                    let duplicateBot = bots.filter(bot => { return bot.namebot === newBot.namebot; }).length;
                    if (duplicateBot) {
                        reject('Bot name"' + newBot.namebot + '" is already taken');
                        return;
                    }

                    // save new user
                    newBot.id = bots.length ? Math.max(...bots.map(bot => bot.id)) + 1 : 1;
                    bots.push(newBot);
                    localStorage.setItem('bots', JSON.stringify(bots));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}