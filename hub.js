const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

});

client.on('message', message => {

    console.log(message.content);

});

client.login(process.env.BOT_TOKEN);

