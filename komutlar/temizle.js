const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(" Lütfen Silinicek Mesaj Miktarını Yazın.!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:white_check_mark: Bune Boş Muhabbet ${args[0]} Mesajı Sildim . `)
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle','clear','sil'],
  permLevel: 2,
  kategori: "moderasyon"
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
