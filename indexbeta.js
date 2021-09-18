const { Client, Intents } = require('discord.js-v11');
const config = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const PREFIX = 'v!' ;

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', msg => {
  if (msg.content === 'v!help') {
	  msg.reply('My commands are : v!help, v!ping, v!kick, v!ban')
  }
  
});

client.on('message', message => {
  if (message.content === 'v!ping') {
  message.channel.send('Loading data').then (async (msg) => {
    msg.delete()
    msg.channel.send(`Pong! API Latency is ${Math.round(client.ws.ping)}ms`);
		})
	}
});

client.login(config.token);