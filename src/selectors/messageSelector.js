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
        name:     message.from.first_name !==undefined ? message.from.first_name : '',
        username: message.from.username,
        is_bot:   message.from.is_bot,
        text:     message.text ? message.text : null,
        date:     message.date,
        id:       message.message_id
    } }

export function getChats(updates){
        if(updates===undefined)
        return []
        return updates.map(x=>{
                return {
                    id:   x.message.chat.id,
                    name: x.message.chat.title !==undefined ? x.message.chat.title:  x.message.chat.last_name!== undefined ? x.message.chat.first_name +' '+  x.message.chat.last_name:x.message.chat.first_name,
                    type: x.message.chat.type,
                }  
            }).reduce((acc,curr)=> acc.find(x=>x.id === curr.id)?acc:[...acc,curr],[])
    }    