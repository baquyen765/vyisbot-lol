  const { MessageEmbed } = require("discord.js");
  const { format, createBar } = require("/home/runner/bot-testing/pp.js")
  exports.execute = async (client, message, args) => {


    
    const discord = require('discord.js')
const DisTube = require("distube"); // so 
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, highWaterMark: 1 << 25 });
const { channel } = message.member.voice; // { message: { member: { voice: { channel: { name: "Allgemein", members: [{user: {"username"}, {user: {"username"}] }}}}}
      if(!channel)
        return message.channel.send(new MessageEmbed()
           .setColor('#FF0000')
          .setFooter(`D:`)
          .setTitle(`❌ ERROR | Please join a Channel first`)
        );
      if(!client.distube.getQueue(message))
        return message.channel.send(new MessageEmbed()
           .setColor('#FF0000')
          .setFooter(`v!play despacito`) 
          //this command shows the info of the video, like view or likes or dislikes, watch out for that
          .setTitle(`❌ ERROR | I am not playing something`)//it's an error msg
          //yea just saying
          //keep this so random people can see the progess lol
          //this is masterpiece
          //most of the commands are copy pasted from autoplay one can confirm
          .setDescription(`The Queue is empty`)
        );
      if(client.distube.getQueue(message) && channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send(new MessageEmbed()
           .setColor('#FF0000')
          .setFooter(`nerd`)
          .setTitle(`❌ ERROR | Please join **my** Channel first`)
          .setDescription(`Channelname: \`${message.guild.me.voice.channel.name}\``)
        );
      let queue = client.distube.getQueue(message);
      let track = queue.songs[0];
      console.log(track)
      message.channel.send(new MessageEmbed()
        .setColor('#00FF00')
        .setFooter(`PLAYING:`)
        .setTitle(`Now playing :notes: ${track.name}`.substr(0, 256))
        .setURL(track.url)
        .setThumbnail(track.thumbnail)
        .addField("Views", `▶ ${track.views}`,true)
        .addField("Dislikes", `:thumbsdown: ${track.dislikes}`,true)
        .addField("Likes", `:thumbsup: ${track.likes}`,true)
        .addField("Duration: ", createBar(queue.currentTime))(msg=>msg.delete({timeout: 120000}).catch(e=>console.log(e.message)))
      )//we only need to delet error messages
  }//imagine failing at pasting
    //watafa
// it will post it in the console dw bout that    
//not everyone can see the console
//cmon this isnt a public bot you are using this package to get famous 8)
//lol no we are stealing commands
// jokes on you i use multiple sources
//stackoverflow is gud
//fucking took like 30 minutes just to realize i missed a , in pp.js
// i mean most of these commands are still pretty standard
// we don't have games yet
//maybe i will add some
//you do it
//i never got away from the laptop since this morning except lunch :sob:
// also you want rps to NOT be rng

exports.help = {
    name: "vidinfo",
    aliases: ["vi", "stats"],
    usage: `vidinfo`
  
}

