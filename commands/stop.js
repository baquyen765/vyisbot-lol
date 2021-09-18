exports.execute = async (client, message, args) => { 
    
const discord = require('discord.js')
const distube = require('distube')
    if(!message.member.voice.channel) return message.reply(':x: | Please join a vc before using this command').then(msg => {
            msg.delete({ timeout: 5000 })
    })
    let queue = await client.distube.getQueue(message)
    if(queue) {
        client.distube.stop(message)
        message.channel.send(':wave: | Stopped the music!')
    } else if(!queue) {
        return
    }
}


exports.help = {
    name: "stop",
    aliases: ["dc","disconnect"],
    usage: `stop`
}

