const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

    client.user.setActivity('Apex Legends', { type: 'PLAYING' });

});

client.on('message', message => {

  const prefix = 'h!'
  
  const messageArray = message.content.split(' ');
  
  const command = messageArray[0];
  
  const args = messageArray.slice(1);
  
  if (message.author.bot) return;
    
    if (message.content.includes(prefix + 'announce')) {
        
        const announcement = args.slice(1).join(' ');
        
        client.channels.cache.get(`771689620118437908`).send(announcement);
        
    }
    
    
});

client.login(process.env.BOT_TOKEN);

