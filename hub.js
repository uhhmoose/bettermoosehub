const Discord = require('discord.js');

const { prefix, badwords } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i\'m ready for duty!');

    client.user.setActivity('a bird outside', { type: 'WATCHING' });

});

client.on('message', message => {
  
  const messageArray = message.content.split(' ');
  
  const command = messageArray[0];
  
  const args = messageArray.slice(1);  
    
  if (message.author.bot) return;

   if (command === `${prefix}say`) {
        const announcement = args.slice(1).join(' ');
        const announcement1 = args.join(' ');
        const annChannel = message.mentions.channels.first();
        if (!message.member.roles.cache.some(role => role.name === 'announcer role')) {
            message.reply('you don\'t have the role required for the use of this command!')
            return
        }
        if (!announcement && !announcement1){
            message.reply('i can\'t send an empty message smh..')
            return
        }
        if (!announcement) {
            message.reply('i can\'t send an empty message smh..')
            return
        }
        if (!annChannel && message.content.includes(announcement1)) {
            message.channel.send(announcement1)
        } else {
            annChannel.send(announcement).catch(err => console.log(err))
        }
    }

    if (message.content.toLowerCase() === 'hello') {
        
        if (message.channel.type == 'dm') {
        
        message.reply('yo this what they call sliding in dms\?')
        
        } else { message.channel.send('hi\:\)'); 
               }
    }
    if (command === `${prefix}coinflip`) {

        const coin = ['you got heads', 'you got tails'];

        const random = Math.floor(Math.random()*coin.length);

        message.reply(coin[random]);
        
    }
    if (message.content.toLowerCase().includes('rayan')) {
        message.delete()
        message.reply('never say that in this household again \>\:\(')        
    }
    if (message.content.toLowerCase().includes('mishiya')) {
        message.delete()
        message.reply('never say that in this household again \>\:\(')        
    }
    if (command === `${prefix}confess`) {
        const cfs = args.join(' ');
        if (message.channel.type != 'dm' && !cfs ) {
            message.channel.send({embed: {
                color: '#ffb7c5',
                author: {
                  name: "",
                  icon_url: ""
                },
                title: "Command \: m+confess",
                description: "Sends an anonymous confession to the confessions channel.",
                fields: [{
                    name: "How to use",
                    value: "Format\: \`m+confess \(what you want to confess)\`\n This sends what ever you write after the command into the confessions channel\n ***\(This command only works in the dms of the bot\)***"
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: "",
                  text: "if you\'re reading this you\'re gay"
                }
                }})}
                else if (message.channel.type != 'dm') {
                    message.reply('***this command only works in my dms smh***')
                } else if (!cfs) {
                    message.reply('i can\'t send an empty confession smh');
                } else {
                    client.channels.cache.get('852463150283358228').send('__***confession\:***__ ' + '*'+cfs+'*');
                }
    }
    
    //if (message.content) {
    //    const profane = !!badwords.find((word) => {
    //      const regex = new RegExp(`\\b${word}\\b`, 'i'); // ,
    //      return regex.test(message.content);             // 
    //    });
    
    //    if (profane) {
    //        message.reply('i\'m not mad. just disappointed. stop swearing')
    //        message.delete()
    //        .catch(console.error);
    //    }
    //  }      
});

client.login(process.env.BOT_TOKEN);
