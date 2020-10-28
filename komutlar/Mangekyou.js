const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "757931123706953790"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Doujutsuyu Kullanabilmek İçin <@&'+role+'> A Sahip Olmalısın!'); {
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + " Mangekyou Sharingan'ı açdı.")
    .setColor('RED')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/703295587843571822/729698626422571058/tenor_1.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mangekyou'],
  permLevel: 0
};

exports.help = {
  name: 'Mangekyou',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};