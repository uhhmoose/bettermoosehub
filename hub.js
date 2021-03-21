const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

    client.user.setActivity('a bird outside', { type: 'WATCHING' });

});

client.on('message', message => {

  const prefix = 'h!'
  
  const messageArray = message.content.split(' ');
  
  const command = messageArray[0];
  
  const args = messageArray.slice(1);  
    
  if (message.author.bot) return;
  
     if (command === 'h!announce') {
        
        if (message.member.roles.cache.some(role => role.name === 'announcer role')) {
            
            const announcement = args.slice(1).join(' ');
        
            const annChannel = message.mentions.channels.first();
        
            annChannel.send(announcement);
        } else { message.reply('you don\'t have the role required for this command')
               }
     }
    
    if (message.content === 'hell0') {
        
        message.reply('yo this what they call sliding in dms\?')
    }
    
});

client.login(process.env.BOT_TOKEN);

