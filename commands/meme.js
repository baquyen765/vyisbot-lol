const Discord = require('discord.js');//holy shit //why not xd //WHY REDDIT //is it softwaregore or software_gore again? //softwaregore
const randomPuppy = require('random-puppy');
exports.execute = async (client, message, args) => {
  const subreddits = ["meme", "me_irl", "dankmeme", "softwaregore", "cursedcomments",
  "madlads"]
  const random = subreddits[Math.floor(Math.random() * subreddits.length)];
  const funnimeme = await randomPuppy(random);


  const embed = new Discord.MessageEmbed()
  .setImage(funnimeme)
  .setTitle(`funni meme lol :sob:`) //help
  .setURL(`https://reddit.com/${random}`)

  message.channel.send(embed);
}

exports.help = {
    name: "meme",
    aliases: ["funni", "ifunny.co", "m"], //VY VY LOOK AT THIS THIS SHIT LOOL
    usage: `meme`
}
