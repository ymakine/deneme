const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild
    let duyurular = guild.channels.find('name', 'notice');
    if (!528649991695368202) return message.reply('`notice` kanalını bulamıyorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Duyuru Kanalını Kontrol Et Bre Hacım.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`:anchor: **Duyuru ;**\n${mesaj}`)
    return guild.channels.get(duyurular.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuruyap'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'Sunucuda Duyuru yapmanızı sağlar.',
  usage: 'duyuru [yazı]'
};
