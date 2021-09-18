const Discord = require("discord.js")
const bot = new Discord.Client({disableMentions: 'everyone'})
const config = require("./config.json")
const keep_alive = require('./keep_alive.js')



bot.on("ready", () => {
    console.log("Ready!")
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if (command === "help") {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle(`${bot.user.username}'s commands`)
            .setDescription(`**Prefix:** ${config.prefix}`)
            .addField(`\`ping\``, `Check your bot's ping`)
            .addField(`\`kick\``, `Usage: **${config.prefix}kick [@User]**\n**${config.prefix}kick [@User][Reason]**`)
            .addField(`\`ban\``, `Usage: **${config.prefix}ban [@User]**\n**${config.prefix}ban [@User][Reason]**`)
            .addField(`\`add\``, `Adds a role to a user \nUsage: **${config.prefix}add [@User] [Role]**`)
            .addField(`\`remove\``, `Removes a role from a user \nUsage: **${config.prefix}remove [@User] [Role]**`)
            .addField(`\`purge\``, `Clears a number of messages between 2 or 100 \nUsage: **${config.prefix}purge [number]**`)
            .addField(`\`rps\``, `Play rock paper scissors`)
            .addField(`\`say\``, `Have the bot say something`)
			.addField(`\`invite\``,`Invite me to your server!`)
        message.channel.send(helpEmbed)
    }

    if (command === "ping") {
        message.channel.send(`Pong! **(${Date.now() - message.createdTimestamp}ms)**`)
    }

    if (command === "kick") {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send(":x: | Insufficient permissions (Requires permission `Kick members`).").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send(":x: | Mention a user first!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        if (!member.kickable)
            return message.channel.send(":x: | You cannot kick this user!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                message.channel.send(`:white_check_mark: | ${member.user.tag} was kicked, no reason was provided`);
            })

            if (reason) return member.kick().then(member => {
                message.channel.send(`:white_check_mark: | ${member.user.tag} was kicked for the following reason : ${reason}`);
            })
        }
    }

    if (command === "ban") {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send(":x: | Insufficient permissions (Requires permission `Ban members`).").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send(":x: | Please mention a user!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        if (!member.bannable)
            return message.channel.send(":x: | You cannot ban this user!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.ban().then(member => {
                message.channel.send(`:hammer: | ${member.user.tag} was banned, no reason was provided.`);
            })

            if (reason) return member.ban(reason).then(member => {
                message.channel.send(`:hammer: | ${member.user.tag} was banned for the following reason : ${reason}.`);
            })
        }
    }

    if (command === "add") {
        if (!message.member.hasPermission('MANAGE_ROLES'))
            return message.channel.send(":x: | Insufficient permissions (Requires permission `Manage roles`).").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send(":x: | Mention a user first!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const add = args.slice(1).join(" ")
        if (!add)
            return message.channel.send(":x: | Please pick a role.").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const roleAdd = message.guild.roles.cache.find(role => role.name === add)
        if (!roleAdd)
            return message.channel.send(":x: | That role does not exist.").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        if (member.roles.cache.get(roleAdd.id))
            return message.channel.send(`:x: | This user already has the ${add} role!`).then(msg => {
        msg.delete({ timeout: 7000 })
    })
        member.roles.add(roleAdd.id).then((member) => {
            message.channel.send(`:white_check_mark: | ${add} added to ${member.displayName}!`)
        })
    }

    if (command === "remove") {
        if (!message.member.hasPermission('MANAGE_ROLES'))
            return message.channel.send("Insufficient permissions (Requires permission `Manage roles`)").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send(":x: | Please mention a user first!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const remove = args.slice(1).join(" ")
        if (!remove)
            return message.channel.send(":x: | Please pick a role.").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        const roleRemove = message.guild.roles.cache.find(role => role.name === remove)
        if (!roleRemove)
            return message.channel.send(":x: | That role does not exist.").then(msg => {
        msg.delete({ timeout: 7000 })
    })
        if (!member.roles.cache.get(roleRemove.id))
            return message.channel.send(`:x: | This user does not have the ${remove} role.`).then(msg => {
        msg.delete({ timeout: 7000 })
    })
        member.roles.remove(roleRemove.id).then((member) => {
            message.channel.send(`:white_check_mark: | ${remove} has been removed from ${member.displayName}.`)
        })
    }

    if (command === "say") {
    const text = args.join(" ")
    if(!text) return message.channel.send("Please say something!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
    message.channel.send(text)
    
    }
   
    if (command === "purge") {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: | Insufficient permissions (requires permission `Manage messages`).").then(msg => {
        msg.delete({ timeout: 7000 })
    })
    const number = args.join(" ")
    if(!number) return message.channel.send(":x: | Please specify a number to purge!").then(msg => {
        msg.delete({ timeout: 7000 })
    })
   message.channel.bulkDelete(number).catch(console.error)
   
   }
    
   if (command === "rps") {
        const options = [
            "rock :rock: ",
            "paper :newspaper2:",
            "scissors :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`You got ${option}!`)
    }

   if (command === "invite") {
		return message.channel.send("**Here is my invite link! : https://discord.com/api/oauth2/authorize?client_id=887138526024597564&permissions=8&scope=bot**")
    }
});

bot.login(config.token)
