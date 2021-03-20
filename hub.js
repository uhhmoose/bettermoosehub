const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

    client.user.setActivity('Apex Legends', { type: 'PLAYING' });

});

client.on('message', message => {

  const prefix = 'h!'
    
    if (message.content === prefix + 'announce') {
        
        let saymsg = message.content
        
        message.channel.send(saymsg.replace('h!say','')
        
        message.delete({timeout: 1}) 
        
    }
    
    
});

client.login(process.env.BOT_TOKEN);

