const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

});

client.on('message', message => {

    if (message.content === 'blip') {

       message.channel.send('blop');

       }

    if (message.content === prefix + 'flip a coin') {

       const random = Math.floor(Math.random()*coin.length);

       message.channel.send(coin[random]);

       }

});

client.login(process.env.BOT_TOKEN);

