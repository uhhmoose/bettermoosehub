const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

});

client.on('message', message => {

  const prefix = 'hub '

  const coin = ['you got heads', 'you got tails']

    if (message.content.includes(prefix)) {

       console.log(message.content)

       }

    if (message.content === 'blip') {

       message.channel.send('blop');

       }

    if (message.content === prefix + 'flip a coin') {

       const random = Math.floor(Math.random()*coin.length);
        
       message.reply(coin[random]);

       }
    
    if (message.content === prefix + 'sing emo boy') {
        
        message.channel.send('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAH')
        
    }

});

client.login(process.env.BOT_TOKEN);

