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
        } else if (!annChannel) {message.reply('please specify what channel to send this to')}
        else if (!args) {message.reply('please specify what i have to send')}
        else {message.reply('you don\'t have the role required for this command')}
    }    
    if (message.content.toLowerCase() === 'hello') {
        
        if (message.channel.type == 'dm') {
        
        message.reply('yo this what they call sliding in dms\?')
        
        } else { message.channel.send('ello'); 
               }
    }
    if (command === 'h!coinflip') {

        const coin = ['you got heads', 'you got tails'];

        const random = Math.floor(Math.random()*coin.length);

        message.reply(coin[random]);
        
    }
    
    
});

client.login(process.env.BOT_TOKEN);
