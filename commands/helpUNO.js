const { MessageEmbed } = require("discord.js");
exports.execute = (client, message, args) => {

const Discord = require('discord.js') //looks like my old bot
// yea the one i spent a whole 5m to type was python

        const helpEmbed = new Discord.MessageEmbed()
            .setTitle(`${client.user.username}'s UNO commands`)
            .setDescription(`**Prefix:   v!(can't be changed for this one)    ** `)
            .addField(`\`creategame\``, `Create a new game of UNO`)
            .addField(`\`join\``, `Usage: **v!join**\n**Join a game of UNO available in a channel**`)
            .addField(`\`leave\``, `Usage: **v!leave**\n**Leave, duh!**`)
            .addField(`\`startgame\``,`Usage: **v!startgame**\n**Start a new game!**`)
            .addField(`\`endgame\``,`Usage: **v!endgame**\n**End current game.**`)
            .addField(`\`closegame\``,`Usage: **v!closegame**\n**Close the game.**`)
            .addField(`\`unoplay\``,`Usage: **v!unoplay**\n**Play a card.`)
            .addField(`\`draw\``,`Usage: **v!draw**\n**Draw a card.**`)
            .addField(`\`table\``,`Usage: **v!table**\n**View current table.**`)
            .addField(`\`viewwinners\``,`Usage: **v!viewwinners**\n**View table winners.**`)
            .addField(`\`settings\``,`Usage: **v!settings**\n**Change table settings.**`)
            .addField(`\`viewsettings\``,`Usage: **v!viewsettings**\n**View table settings.**`)
            
            
			//ok have fun
        message.channel.send(helpEmbed)
    }
    //WHAT HAVE YOU DONE IT WAS WORKING SECONDS EARLIER
    //jk
    exports.help = {
    name: "helpuno",
    aliases: ["helpUNO","hu","huno"],
    usage: `helpuno`
}