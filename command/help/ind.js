exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Sorry ${pushname} Todays limit has run out\n limit is reset every hour 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Hello ${pushname} you are not registered yet, please type .daftar for registration `
	}
exports.regis = () =>{
	return` You are already registered in the Bot Database`
	}
exports.eror = () =>{
	return` Yah eror`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *SUCCESSFUL REGISTRATION*

• Name : ${pushname}
• Number : ${sender.split("@")[0]}
• Time : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks already registered in the xznbotz database.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Only Owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Only Admin Group${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bots are not group admins`
	}
exports.err = () =>{
	return`⚠️ This feature is in error !`
	}
exports.group = () =>{
	return`🙅‍♀️ Special commands in the group`
	}

exports.wait = () =>{
	return`⏳ PROSESS... ~`
	}
exports.ok = () =>{
	return` ✅ Ok done ~`
	}
exports.welcome = () =>{
	return`Hii
Don't forget to follow the rules`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, good ${salam}
	
╭─⧉
│•INFO BOT•
│VERSI : 0.02
│FITUR : 230
│CREATOR : AkmalNz
│MODEL SCRIPT : BETA
│https://tiktok.@_xzennz
╰───────────────┈ ⳹

╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}apri
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}ig [url]
│ • ${prefix}igstalk
│ • ${prefix}githubstalk
│ • ${prefix}ytsearch [query]
│ • ${prefix}mediafire [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│
├ *Wibu*
│ • ${prefix}otaku
│ • ${prefix}komiku
│ • ${prefix}chara
│ • ${prefix}naruto
│ • ${prefix}kaneki
│ • ${prefix}rimuru
│ • ${prefix}akira
│ • ${prefix}kurama
│ • ${prefix}dazai
│ • ${prefix}miku
│ • ${prefix}mikasa
│ • ${prefix}eren
│ • ${prefix}titan
│ • ${prefix}levi
│ • ${prefix}sakura
│ • ${prefix}hinata
│ • ${prefix}neji
│ • ${prefix}shinobu
│ • ${prefix}kurumi
│ • ${prefix}rem
│ • ${prefix}minato
│ • ${prefix}jiraya
│ • ${prefix}tsunade
│ • ${prefix}kiba
│ • ${prefix}boruto
│ • ${prefix}sarada
│ • ${prefix}sasuke
│ • ${prefix}madara
│ • ${prefix}obito
│ • ${prefix}tanjiro
│ • ${prefix}nezuko
│ • ${prefix}luffy
│ • ${prefix}zoro
│ • ${prefix}sanji
│ • ${prefix}gon
│ • ${prefix}killua
│ • ${prefix}sagiri
│ • ${prefix}zenitsu
│ • ${prefix}natsu
│ • ${prefix}genos
│ • ${prefix}saitama
│ • ${prefix}inosuke
│ • ${prefix}inori
│
├ *Sfw Dan Nsfw*
│ • ${prefix}waifu
│ • ${prefix}husbu
│ • ${prefix}loli
│ • ${prefix}milf
│ • ${prefix}cosplay
│ • ${prefix}wallml
│ • ${prefix}futanari
│ • ${prefix}nekoh
│ • ${prefix}anal
│ • ${prefix}hentai
│ • ${prefix}ahegao
│ • ${prefix}ass
│ • ${prefix}blowjob
│ • ${prefix}bdsm
│ • ${prefix}cuckold
│ • ${prefix}cum
│ • ${prefix}ero
│ • ${prefix}femdom
│ • ${prefix}foot
│ • ${prefix}gangbang
│ • ${prefix}glasses
│ • ${prefix}masturbation
│ • ${prefix}orgy
│ • ${prefix}panties
│ • ${prefix}pussy
│ • ${prefix}things
│ • ${prefix}yuri
│ • ${prefix}neko
│
├ *Asupan*
│ • ${prefix}asupan
│ • ${prefix}ukty
│ • ${prefix}ghea
│ • ${prefix}rikagusriani
│ • ${prefix}bocil
│ • ${prefix}santuy
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}attp
│ • ${prefix}ttp
│ • ${prefix}toimg
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│ • ${prefix}toptt
│ • ${prefix}tomp3
│ • ${prefix}tomp4
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}tourl [image/video]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│
├ *Education*
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}brainly [soal]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│ • ${prefix}pantun
│ 
├ *Walpaper*
│ • ${prefix}walpaper
│ • ${prefix}teknologi
│ • ${prefix}programmer
│ • ${prefix}gamer
│ • ${prefix}anime
│ • ${prefix}muslim
│ • ${prefix}cyber
│
├ *Other*
│ • ${prefix}ssweb
│ • ${prefix}cekapikey [lolhuman]
│ • ${prefix}delete
│ • ${prefix}meme
│ • ${prefix}readmore
│ • ${prefix}infogempa
│ • ${prefix}upswvideo
│ • ${prefix}upswteks
│ • ${prefix}upswimage
│ • ${prefix}quotesanime
│ • ${prefix}searchgc [link]
│ • ${prefix}playstore [nama apk]
│
├ *Islam*
│ • ${prefix}kisahnabi
│ • ${prefix}surah
│
├ *Sound*
│ • ${prefix}sound
│ • ${prefix}sound1
│ • ${prefix}sound2
│ • ${prefix}sound3
│ • ${prefix}sound4
│ • ${prefix}sound5
│ • ${prefix}sound6
│ • ${prefix}sound7
│ • ${prefix}sound8
│ • ${prefix}sound9
│ • ${prefix}sound10
│ • ${prefix}sound11
│ • ${prefix}sound12
│
├ *Game*
│ • ${prefix}tebakgambar 
│ • ${prefix}suit
│ • ${prefix}family100
│ • ${prefix}caklontong
│ • ${prefix}truth
│ • ${prefix}dare
│ • ${prefix}gaycek
│ • ${prefix}sangecek
│ • ${prefix}lesbicek
│ • ${prefix}gantengcek
│ • ${prefix}cantikcek
│ • ${prefix}cantik
│ • ${prefix}ganteng
│ • ${prefix}jelek
│ • ${prefix}goblok
│ • ${prefix}bego
│ • ${prefix}pinter
│ • ${prefix}jago
│ • ${prefix}nolep
│ • ${prefix}monyet
│ • ${prefix}babi
│ • ${prefix}beban
│ • ${prefix}baik
│ • ${prefix}jahat
│ • ${prefix}anjing
│ • ${prefix}haram
│ • ${prefix}kontol
│ • ${prefix}pakboy
│ • ${prefix}wibu
│ • ${prefix}hebat
│ • ${prefix}sadboy
│ • ${prefix}sadgirl
│ • ${prefix}apakah
│ • ${prefix}kapankah
│ • ${prefix}pakgirl
│ • ${prefix}jadian
│
├ *Photooxy*
│ • ${prefix}narutobanner
│ • ${prefix}shadow
│ • ${prefix}romantic
│ • ${prefix}smoke
│ • ${prefix}burnpaper
│ • ${prefix}lovemsg
│ • ${prefix}grass
│ • ${prefix}doubleheart
│ • ${prefix}coffecup
│ • ${prefix}lovetext
│ • ${prefix}butterfly
│
├ *Info*
│ • ${prefix}owner
│ • ${prefix}donasi
│ • ${prefix}rules
│ • ${prefix}daftar
│ • ${prefix}creator
│
├ *Owner*
│ • ${prefix}bc [text]
│ • ${prefix}bc2 [text]
│ • ${prefix}leave
│ • ${prefix}get [link]
│ • ${prefix}shutdown
│ • ${prefix}restart
│ • ${prefix}buggc
│ • ${prefix}creategrup @tag
│ • ${prefix}listgroup
│ • ${prefix}block
│ • ${prefix}unblock
│ • ${prefix}setppbot
│ • >
│ • $
│ •  => 
│
├ *Group*
│ • ${prefix}antilink 1 / 0
│ • ${prefix}antivirtex 1 / 0
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}grup open/close
│ • ${prefix}add 628
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
╭─⧉ BIG THANKS TO ⧉
│❒ ALLAH SWT
│❒ ORTU
│❒ AKMAL NZ (NEWBIE)
│❒  ɪͥᴛͭsᷤ͢ᴍͫᴇͤᴏɢɢʏ֧ (PARTNER)
│❒ SUSHII (PARTNER)
│❒ ZEEONE OFC (MASTAH)
│❒ ALDI FAUZI (MASTAH)
│❒ VENZZ (NEWBIE)
│❒ SIEGRIN (MASTAH)
│❒ DINATA (MASTAH)
│❒ SANZY YT (MASTAH)
│❒ PENYEDIA MODULE
│❒ WHATSAPP
╰───────────────┈ ⳹
`
	}