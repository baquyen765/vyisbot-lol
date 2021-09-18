const filters = [
  "clear",
  "lowbass",
  "bassboost",
  "purebass",
  "8D",
  "vaporwave",
  "nightcore",
  "phaser",
  "tremolo",
  "vibrato",
  "reverse",
  "treble",
  "normalizer",
  "surrounding",
  "pulsator",
  "subboost",
  "karaoke",
  "flanger",
  "gate",
  "haas",
  "mcompand"
]
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
        if(!filters.join(" ").toLowerCase().split(" ").includes(args[0].toLowerCase()))
          return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | Not a valid Filtertype`)
            .setDescription(`Usage: \`${prefix}filter <Filtertype>\`\nFilter types:\n> \`${filters.join("`, `")}\``.substr(0, 2048))
          );
      client.distube.setFilter(message, args[0]);

      message.channel.send(new MessageEmbed()
        .setColor('#00FF00')
        .setFooter(`Nice!`)
        .setTitle(`✅ Successfully set Filter to: \`${args[0]}\``)
      ).then(msg=>msg.delete({timeout: 4000}).catch(e=>console.log(e.message)))
    }


    exports.help = {
    name: "filter",
    aliases: ["f", "fil"],
    usage: `filter`
}







