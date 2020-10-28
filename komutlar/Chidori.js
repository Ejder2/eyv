const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "757190984021966888"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Jutsuyu Kullanabilmek İçin <@&'+role+'> Kullanıcısı Olmalısın!'); {
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + " Chidori attı 30HP vurdu.")
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://i.pinimg.com/originals/6a/6b/4d/6a6b4dace0250e6d5ed83ce7b4f4568b.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['chidori'],
  permLevel: 0
};

exports.help = {
  name: 'Chidori',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};