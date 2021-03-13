const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

    client.user.setActivity('Apex Legends', { type: 'PLAYING' });

});

client.on('message', message => {

  const prefix = 'hub '

  const coin = ['you got heads', 'you got tails']
  
  const announceChannel = client.channels.cache.get('771689620118437908');
    
  const messageArray = message.content.split(" ");
    
  const command = messageArray[0];
    
  const args = messageArray.slice(1);  
    
    if (command = 'hubannnounce') {
        
        const announcement = args.slice(1).join(" ");
        
        announceChannel.send(announcement);
        
    }
  
});

client.login(process.env.BOT_TOKEN);

