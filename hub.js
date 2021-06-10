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
    
    if (command === `${prefix}help`) {
    message.channel.send({embed: {
color: 3447003,
author: {
  name: client.user.username,
  icon_url: "https://cdn.discordapp.com/avatars/770559351093985290/11b3d037594b9ea746bf52c764bb19a1.png?size=1024"
},
title: "Help Command Test",
description: "just testing.",
fields: [{
    name: "h!say",
    value: "format\:\`h!say \{\#channel\} \(what you want him to say in the specified channel)\`"
  }
],
timestamp: new Date(),
footer: {
  icon_url: "https://cdn.discordapp.com/avatars/770559351093985290/11b3d037594b9ea746bf52c764bb19a1.png?size=1024",
  text: "moosehub ©"
}
}})}
    if (command === `${prefix}say`) {
            const announcement = args.slice(1).join(' ');
            const annChannel = message.mentions.channels.first();
        if (!annChannel) {message.reply('please specify what channel i should send this to'); return;};
        if (!announcement) {message.reply('please specify what i should be sending'); return;};
           if (message.member.roles.cache.some(role => role.name === 'announcer role')) {annChannel.send(announcement).catch(err => console.log(err))} 
             else {message.reply('you don\'t have the role required for the use of this command')}
    }

    if (message.content.toLowerCase() === 'hello') {
        
        if (message.channel.type == 'dm') {
        
        message.reply('yo this what they call sliding in dms\?')
        
        } else { message.channel.send('ello'); 
               }
    }
    if (command === `${prefix}coinflip`) {

        const coin = ['you got heads', 'you got tails'];

        const random = Math.floor(Math.random()*coin.length);

        message.reply(coin[random]);
        
    }
    if (command === `${prefix}stab`) {
       message.delete() 
       message.channel.send('<a:stab:793030200669634580>')
    }
    if (command === `${prefix}vibe`) {
        message.delete()
        message.channel.send('<a:vibekid_slow:792317854795169802>')
    }
    if (command === `${prefix}heppa`) {
        message.delete()
        message.channel.send('<a:heppa_mememe:784129965344030739>')
    }
    if (command === `${prefix}rindhoo`) {
        message.delete()
        message.channel.send('<a:rindhoo:792421810142445618>')
    }
    if (message.content.toLowerCase().includes('rayan')) {
        message.delete()
        message.reply('never say that in this household again \>\:\(')        
    }
    if (message.content.toLowerCase().includes('mishiya')) {
        message.delete()
        message.reply('never say that in this household again \>\:\(')        
    }
    if (command === `${prefix}direct`) {
        client.users.cache.get(`691875333112070144`).send('hello <a:rindhoo:792421810142445618>')
    }
    if (command === `${prefix}confess`) {
        const cfs = args.join(' ');
        if (message.channel.type != 'dm' && !cfs ) {
            message.channel.send({embed: {
                color: '#000000',
                author: {
                  name: "",
                  icon_url: ""
                },
                title: "Command \: `confess",
                description: "Sends an anonymous confession to the confessions channel.",
                fields: [{
                    name: "How to use",
                    value: "Format\: \`${prefix}confess \(what you want to confess)\`\n This sends what ever you write after the command into the confessions channel\n ***\(This command only works in the dms of the bot\)***"
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
    //      const regex = new RegExp(`\\b${word}\\b`, 'i'); // if the phrase is not alphanumerical,
    //      return regex.test(message.content);             // you may need to escape tokens
    //    });
    
    //    if (profane) {
    //        message.reply('i\'m not mad. just disappointed. stop swearing')
    //        message.delete()
    //        .catch(console.error);
    //    }
    //  }      
});

client.login(process.env.BOT_TOKEN);
