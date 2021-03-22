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
            const announcement = args.slice(1).join(' ');
            const annChannel = message.mentions.channels.first();
        if (!annChannel) {message.reply('please specify what channel i should send this to'); return;};
           if (message.member.roles.cache.some(role => role.name === 'announcer role')) {annChannel.send(announcement).catch(err => console.log(err)); {message.reply('an error occured while sending your message. check if you have specified any arguements')}} 
             else {message.reply('you don\'t have the role required for the use of this command')}
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
    if (command === 'h!stab') {
       message.delete() 
       message.channel.send('<a:stab:793030200669634580>')
    }
    if (command === 'h!vibe') {
        message.delete()
        message.channel.send('<a:vibekid_slow:792317854795169802'>)
    }
                             
});

client.login(process.env.BOT_TOKEN);
