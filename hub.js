const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    if (message.content === 'ping') {

       message.channel.send('pong');

       }

});

client.on('message', message => {

    console.log(message.content);

});

client.login(process.env.BOT_TOKEN);

