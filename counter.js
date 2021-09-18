const { db } = require("quick.eco");

function counter(message, client) {
  let channel = message.channel;
  let count = db.fetch(`counter_${message.guild.id}`);
  if (count === null) count = db.set(`counter_${message.guild.id}`, {
    number: 0,
    author: client.user.id
  });
  
  if (!message.author.bot && message.author.id === count.author) {
    message.delete();
    message.reply("Please wait for your turn").then(m => m.delete({ timeout: 5000 }));                //fill this in: Time(ms) until the notice disappear
    return;
  }
  if (!message.author.bot && isNaN(message.content)) {
    message.delete();
    message.reply("Messages in this channel must be a number").then(m => m.delete({ timeout: 5000 }));     //fill this in: Time(ms) until the notice disappear
    return;
  }
  if (!message.author.bot && parseInt(message.content) !== count.number + 1) {
    message.delete();
    message.reply(`Next number must be ${count.number + 1}`).then(m => m.delete({ timeout: 5000 })); //fill this in: Time(ms) until the notice disappear
    return;
  }
  count = db.set(`counter_${message.guild.id}`, { number: count.number + 1, author: message.author.id });
  channel.setTopic(`Next number must be ${count.number + 1}.`);      // This will show the next numbẻ in the channel description to prevent trolls
}

module.exports = counter;