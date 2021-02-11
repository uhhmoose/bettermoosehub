const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

});

client.on('message', message => {

  const prefix = 'hub '

  const coin = ['you got heads', 'you got tails']

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
        
        message.channel.send('hey emo boy 
                             'hey hey emo boy 
                             'hey emo boy 
                             'hey hey emo boy 
                             'hey emo boy
                             'hey hey emo boy 
                             'hey emo boy 
                             'hey hey emo boy 
                             'hey emo boy 
                             'hey hey emo boy
                             'saw this boy at the mall last week 
                             'got the kind of look to make me freak 
                             'that long ass hair and his tightest jeans 
                             'with my chemical romance on his tee
                             'he looks so sick like he was dying
                             'if i said he wasn\'t hot then i\'d be lying 
                             'please handsome don\'t be coy
                             'come on fuck me emo boy')
    }
    
});

client.login(process.env.BOT_TOKEN);

