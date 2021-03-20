const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

    client.user.setActivity('Apex Legends', { type: 'PLAYING' });

});

client.on('message', message => {

  const prefix = 'h!'
    
    if (message.content === prefix + 'announce') {
        
        client.channels.cache.get(channel => channel.name === '➺moosehub-tests').send(message.content);
        
    }
    
    
});

client.login(process.env.BOT_TOKEN);

