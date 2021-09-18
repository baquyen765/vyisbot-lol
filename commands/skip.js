exports.execute = async (client, message, args) => {
const Discord = require('discord.js')
const distube = require('distube')

if(!message.member.voice.channel) return message.reply(`:x: | You're not in a voice channel!`).then(msg => {
        msg.delete({ timeout : 5000 })
})
const queue = client.distube.getQueue(message)
if(!queue) return message.channel.send(`:x: | Nothing is playing!`).then(msg => {
        msg.delete({ timeout : 5000 })
})
client.distube.skip(message)
message.channel.send(`✅ | Skipped`)
}
exports.help = {
    name: "skip",
    aliases: ["s","next"],
    usage: `skip`
}