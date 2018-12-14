export function reduceMessages(messages){
    if(messages===undefined)
    return []

    return messages.map(message=>{
        return reduceMessage(message)  
    }).reduce((acc,curr)=> acc.find(x=>x.id === curr.id) ? acc : [...acc,curr],[])

}

export function reduceMessage(message){
    return {
        chatId:   message.chat.id,
        name:     message.from!==undefined?message.from.first_name !==undefined ? message.from.first_name : '' :message.chat.title,
        username:  message.from!==undefined? message.from.username: 'chanel',
        is_bot:    message.from!==undefined? message.from.is_bot: true,
        text:     message.text ? message.text : null,
        date:     message.date,
        id:       message.message_id
    } }

export function getChats(updates){
        if(updates===undefined)
        return []
        return updates.map(x=>{
                return {
                    id:   x.chat.id,
                    name: x.chat.title !==undefined ? x.chat.title:  x.chat.last_name!== undefined ? x.chat.first_name +' '+  x.chat.last_name:x.chat.first_name,
                    type: x.chat.type
                }  
            }).reduce((acc,curr)=> acc.find(x=>x.id === curr.id) ? acc : [...acc,curr],[])
    }    