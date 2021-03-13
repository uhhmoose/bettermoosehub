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
  const command = messageArray[1];
  const args = messageArray.slice(2);  
    
    if (message.content === prefix + 'announce') {
        
        const announcement = args.slice(2).join(" ");
        
        announceChannel.send(announcement);
        
    }
  
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

