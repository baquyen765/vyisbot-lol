const { MessageEmbed } = require("discord.js");
exports.execute = (client, message, args) => {

const discord = require('discord.js')
const DisTube = require("distube"); // so 
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, highWaterMark: 1 << 25 });

const { channel } = message.member.voice; 
      if(!channel)
        return message.channel.send(new MessageEmbed()
          .setColor('#FF0000')
          .setFooter(`D:`)
          .setTitle(`❌ ERROR | Please join a Channel first`)
        );
      if(!client.distube.getQueue(message))
        return message.channel.send(new MessageEmbed()
          .setColor('#FF0000')
          .setFooter(`you dumbass`)
          .setTitle(`❌ ERROR | I am not playing Something`)
          .setDescription(`The Queue is empty`)
        );
      if(client.distube.getQueue(message) && channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send(new MessageEmbed()
          .setColor('#FF0000')
          .setFooter(`you suck`)
          .setTitle(`❌ ERROR | Please join **my** Channel first`)
          .setDescription(`Channelname: \`${message.guild.me.voice.channel.name}\``)
        );
      message.channel.send(new MessageEmbed()
        .setColor('#00FF00')
        .setFooter(`Nice!`)
        .setTitle(`✅ Successfully toggled Autoplay! It's now: ${client.distube.toggleAutoplay(message) ? "ON" : "OFF"}`)
      ).then(msg=>msg.delete({timeout: 120000}).catch(e=>console.log(e.message)))
    } 
    
  


exports.help = {
    name: "autoplay",
    aliases: ["toggle", "auto"],
    usage: `autoplay`
}