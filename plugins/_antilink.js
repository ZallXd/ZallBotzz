let handler = m => m
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
    let isGroupLink = linkRegex.exec(m.text)
  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
  if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "Admin free share :'v" : `\n\nlink group terdeteksi dan ${global.namebot} bukan admin jadi tidak bisa ngekick!`}`)
  if (isBotAdmin) {
      m.reply(` *_乂 Link Group Terdeteksi!_* \n\n_pesan kamu akan di hapus!_`.trim())
      await this.delay(500)
      await this.sendMessage(m.chat, { delete: m.key })
    }
  }
  return true
}
export default handler
