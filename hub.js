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
    
  const args = message.content.slice(1).trim().split(' ');
    
  const command = args.shift().toLowerCase();

  if (command == "hubannounce") {
    var announcement = "";
    for (const word in args) {
      announcement = announcement + args[word] + " ";
    }
    message.announceChannel.send(announcement)
  }
    
});

client.login(process.env.BOT_TOKEN);

