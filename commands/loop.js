const { MessageEmbed } = require("discord.js");
exports.execute = (client, message, args) => {

const discord = require('discord.js')
const DisTube = require("distube"); // so 
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, highWaterMark: 1 << 25 });

const { channel } = message.member.voice; 
      if(!channel)
        return message.channel.send(new MessageEmbed()
          .setColor('#FF0000')
          .setFooter(`Listen here you little shit, YOU ONLY HAVE ONE JOB IS TO ACTUALLY JOIN THE MF CHANNEL AHHHH MY 10 HOURS OF CODING :SOB:`)
          .setTitle(`❌ ERROR | Please join a Channel first`)
        ); //you can keep that until release
        //nah keep that to see my large amount of time wasted :sob:
      if(!client.distube.getQueue(message))
        return message.channel.send(new MessageEmbed()
          .setColor('#FF0000')
          .setFooter(`you dumbass`)
          .setTitle(`❌ ERROR | I am not playing something`)
          .setDescription(`The queue is empty`)
        );
      if(client.distube.getQueue(message) && channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send(new MessageEmbed()
          .setColor('#FF0000')
          .setFooter(`you suck`)
          .setTitle(`❌ ERROR | Please join **my** Channel first`)
          .setDescription(`Channelname: \`${message.guild.me.voice.channel.name}\``)
        );
        if(!args[0])
        return message.channel.send(`Available loop methods: song(1), queue(2), off(3)`)
        ;
 let loopstate = args[0].toString();
      if (loopstate.toLowerCase() === "song") loopstate = "1";
      if (loopstate.toLowerCase() === "queue") loopstate = "2";
      if (loopstate.toLowerCase() === "off") loopstate = "0";
      if (loopstate.toLowerCase() === "track") loopstate = "1";
      if (loopstate.toLowerCase() === "q") loopstate = "2";
      if (loopstate.toLowerCase() === "qu") loopstate = "2";
      if (loopstate.toLowerCase() === "disable") loopstate = "0";
      
      loopstate = Number(loopstate);
      loopstates = {
        "0": "off",
        "1" : "song",
        "2": "queue"
      }
      if( 0 <= loopstate && loopstate <= 2){
        client.distube.setRepeatMode(message, parseInt(loopstate));
        message.channel.send(new MessageEmbed()
          .setColor('#00FF00')
          .setFooter('Top text')
          .setTitle(`🔁 Changed Repeat mode to: \`${loopstates[loopstate]}\``)
        ).then(msg=>msg.delete({timeout: 120000}).catch(e=>console.log(e.message)))
      }
      else{
        return message.channel.send(new MessageEmbed()
          .setColor('#FF0000')
          .setFooter(`how do i loop lmao`)
          .setTitle(`❌ ERROR | You didn't provided a Loop method`)
          .setDescription(`Usage: \`${prefix}loop <0/1/2>\``)
        );
      }


}


    exports.help = {
    name: "loop",
    aliases: ["repeat", "l"],
    usage: `loop`
}


