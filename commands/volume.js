exports.execute = async (client, message, args) => { 
const Discord = require('discord.js')
const distube = require('distube')
if (!message.member.voice.channel) {
        var embed = new Discord.MessageEmbed()
        .setTitle('⛔ Oops...⛔')
        .setDescription('You must be in a voice channel to use this command...').then(msg => {
                msg.delete({ timeout: 7000 })
        })
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setColor("RED")
        return message.channel.send(embed)
        }

const queue = client.distube.getQueue(message)
if (!queue) return message.channel.send(`There is nothing in the queue right now!`).then (msg => {
        msg.delete({ timeout: 5000 })
})
const volume = parseInt(args[0]) // if someone didnt say a number example =v gd
if (isNaN(volume) || volume < 0 || volume > 300) return message.channel.send(`Please enter a number between 0-300 !`).then(msg => {
        msg.delete({ timeout: 5000 })
}) // so it gonna send this
client.distube.setVolume(message, volume) // set the volume

const embed1 = new Discord.MessageEmbed()
.setTitle(`🔉 Volume 🔊`)
.setDescription(`Volume set to ${volume}`)
.setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
.setColor("#FFFF00")
message.channel.send(embed1) // send this embed

}


exports.help = {
    name: "volume",
    aliases: ["v", "vol"],
    usage: `volume`
}
