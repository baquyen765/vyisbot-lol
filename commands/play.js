exports.execute = async (client, message, args) => { 
  const DisTube = require("distube"); // so 
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, highWaterMark: 1 << 25 });

    if(!message.member.voice.channel) return message.reply('Join a voice channel first!').then(msg => {
            msg.delete({ timeout: 5000 })
    })
    const music = args.join(" ")
    if(!music) return message.channel.send('Please provide a song to play.').then(msg => {
            msg.delete({ timeout: 5000 })
    })
    client.distube.play(message, music)

}

//ADD MOAR TIMEOUT COMMAND
exports.help = {
    name: "play",
    aliases: ["p", "pp", "start"],
    usage: `play`
}
