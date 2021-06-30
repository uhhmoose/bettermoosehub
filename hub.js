const Discord = require("discord.js");

const { prefix, badwords } = require("./config.json");

const client = new Discord.Client();

const db = require("quick.db");

client.once("ready", () => {
  console.log("i'm ready for duty!");

  client.user.setActivity("a bird outside", { type: "WATCHING" });
});

client.on("message", message => {
  const messageArray = message.content.split(" ");

  const command = messageArray[0];

  const args = messageArray.slice(1);

  if (message.author.bot) return;

  if (command === `${prefix}say`) {
    const announcement = args.slice(1).join(" ");
    const announcement1 = args.join(" ");
    const annChannel = message.mentions.channels.first();
    if (
      !message.member.roles.cache.some(role => role.name === "announcer role")
    ) {
      message.reply(
        "you don't have the role required for the use of this command!"
      );
      return;
    }
    if (!announcement1) {
      message.reply("i can't send an empty message smh..");
      return;
    }
    if (!announcement && message.content.includes(annChannel)) {
      message.reply("i can't send an empty message smh..");
      return;
    }
    if (!annChannel && message.content.includes(announcement1)) {
      message.delete();
      message.channel.send(announcement1);
    } else {
      annChannel.send(announcement).catch(err => console.log(err));
    }
  }

  if (
    message.content.toLowerCase() === "hello" ||
    message.content.toLowerCase() === "hi" ||
    message.content.toLowerCase() === "hey"
  ) {
    if (message.channel.type == "dm") {
      message.reply("yo this what they call sliding in dms?");
    } else {
      const greetings = [
        "hi:)",
        "hello",
        "hi",
        "hey sexy;)",
        "what's up sexy;)",
        "hello:)",
        "what's up",
        "hey;)",
        "hey",
        "hey:)"
      ];
      let random = Math.floor(Math.random() * greetings.length);
      message.channel.send(greetings[random]);
    }
  }
  if (command === `${prefix}coinflip`) {
    const coin = ["you got heads", "you got tails"];

    let random = Math.floor(Math.random() * coin.length);

    message.reply(coin[random]);
  }
  if (message.content.toLowerCase().includes("rayan")) {
    message.delete();
    message.reply("never say that in this household again >:(");
  }
  if (message.content.toLowerCase().includes("mishiya")) {
    message.delete();
    message.reply("never say that in this household again >:(");
  }
  if (command === `${prefix}confess`) {
    const cfs = args.join(" ");
    if (message.channel.type != "dm" && !cfs) {
      let embed = new Discord.MessageEmbed()
        .setColor("#ffb7c5")
        .setTimestamp()
        .setTitle("command : `m+confess`")
        .setDescription(
          "sends an anonymous confession to the confessions channel.\n ***please note that this command only works in the dms of the bot!***"
        )
        .addFields({
          name: "format",
          value: "`m+confess (what you want to confess)`"
        })
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/774268269866909698/859793992631582720/ac65wAAAABJRU5ErkJggg.png"
        );
      message.channel.send(embed);
    } else if (message.channel.type != "dm") {
      message.reply("***this command only works in my dms smh***");
    } else if (!cfs) {
      message.reply("i can't send an empty confession smh");
    } else {
      client.channels.cache
        .get("852463150283358228")
        .send("__***confession:***__ " + "*" + cfs + "*");
    }
  }
});

client.login(process.env.BOT_TOKEN);
