const { MessageEmbed } = require("discord.js");



exports.execute = (client, message, args) => {
  let user = message.author;
       let avatar;

if (args.length > 0) {
           let userID = args[0].slice(3, -1)
           user = message.guild.members.cache.get(userID).user;
       }

       avatar = getUserAvatar(user);


       let embed = new MessageEmbed()
           .setTitle(`${user.tag}'s avatar'`)
           .setURL(avatar)
           .setImage(avatar)
           .setColor('RANDOM')
           .setDescription(`Avatar, its that simple`)
       message.channel.send(embed)
   }



function getUserAvatar(user) {
    let avatar = user.avatarURL()

    return avatar;
}


exports.help = {
    name: "avatar",
    aliases: ["a", "ava", "pfp"],
    usage: `avatar`
}

