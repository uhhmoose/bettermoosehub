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
  
  const annRole = message.guild.roles.find('announcer role', 'announcer');  
    
  if (message.author.bot) return;
  
  if (!message.member.roles.has(annRole.id)) return;
   
     if (command === 'h!announce') {
         
        const announcement = args.slice(1).join(' ');
        
        const annChannel = message.mentions.channels.first();
        
        annChannel.send(announcement); 
     }
        
});

client.login(process.env.BOT_TOKEN);

