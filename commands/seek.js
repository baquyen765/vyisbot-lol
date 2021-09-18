//Two monkes creating codes
//ok i have no idea now
//wait shit i forgot discord xd
//hahaha
const discord = require('discord.js')
const distube = require("distube"); // so ), 

exports.execute = (client, message, args) => {
  function userInfo(user, message) {
const second = parseInt(args[0]) // snoooooooodifferent o-o
if (!message.member.voice.channel) {
        var embed = new Discord.MessageEmbed()
        .setTitle('⛔ Oops...⛔')
        .setDescription('You must be in a voice channel to use this command...').then(msg => {
                msg.delete({ timeout: 5000 })
        })
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setColor("RED")
        return message.channel.send(embed)
        }

}

client.distube.seek(message, Number(args[0]*1000));
message.channel.send(`Seeked the song to \`${args[0]} seconds\``)
//lemme google this real quick
//HEY HEYYY
//client not defined
//message is not defined
}

exports.help = {
    name: "seek",
    aliases: ["ff"],
    usage: `seek`
}
//what even is wrong here