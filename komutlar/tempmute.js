const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Böyle Bir Kullanıcı Bulunamadı");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Bunu Susturamam!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Süren Bitene Kadar Konuşamazsın.!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Kişisi ${ms(ms(mutetime))} Süreyle Mutelendi.`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Mutesi Açıldı.!`);
  }, ms(mutetime));


//end of module
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute', 'tempmute'],
  permLevel: "2
};

exports.help = {
  name: "mute-tempmute",
  description: "Kişiyi Susturur",
  usage: "tempmute <süre>"
};
