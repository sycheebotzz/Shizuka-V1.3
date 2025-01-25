const chalk = require('chalk')
const fs = require('fs')

global.animemenu = (prefix) => {
return`${global.gris}ᴍᴇɴᴜ ɪɴғᴏ${global.gris}  
┌
│⇨ .imdb
│⇨ .ssearch 
│⇨ .sdetail
│⇨ .miku
│⇨ .otakus ( name anime )
│⇨ .otakud ( get detail anime )
│⇨ .otakuget ( get link dl )
│⇨ .krkdl ( url from kraken )
│⇨ .pxvdl ( url from pdrain )
│⇨ .komikus ( search manga )
│⇨ .komikud ( get detail chap )
│⇨ .komikuget ( dl manga )
│⇨ .komikcs ( search manga )
│⇨ .komikcd ( get detail chap )
│⇨ .komikcget ( dl manga )
│⇨ .nimes ( nama anime )
│⇨ .nimed ( url ) from nimes
│⇨ .nimeget ( url ) from nimed
│⇨ .getanime
│⇨ .genshin
│⇨ .amv
│⇨ .bluearchive
│⇨ .pin
└            `
},
global.ownermenu = (prefix) => {
return`${global.gris}ᴏ ᴡ ɴ ᴇ ʀ - ᴏ ɴ ʟ ʏ${global.gris}
┌
│⇨ .self
│⇨ .clearall 
│⇨ .pinchat
│⇨ .unpinchat
│⇨ .gconly
│⇨ .public
│⇨ .setpppanjang
│⇨ .setppgcpanjang
│⇨ .addcase
│⇨ .doraemon
│⇨ .join
│⇨ .bctext
│⇨ .poll
│⇨ .bcimage
│⇨ .bcvideo
│⇨ .creategc
│⇨ .setexif
│⇨ .userjid
│⇨ .userjid
│⇨ .setbotname
│⇨ .setbotbio
│⇨ .delppbot
│⇨ .restart
│⇨ .setppbot
│⇨ .addprem
│⇨ .delprem
│⇨ .addowner
│⇨ .delowner
│⇨ .addvn
│⇨ .delvn
│⇨ .addsticker
│⇨ .delsticker 
│⇨ .addimage
│⇨ .delimage
│⇨ .addvideo
│⇨ .delvideo
│⇨ .block
│⇨ .unblock del
│⇨ .leavegc
└
`}

global.othermenu = (prefix) => {
return`${global.gris}ᴏ ᴛ ʜ ᴇ ʀ - ᴍ ᴇ ɴ ᴜ${global.gris}
┌
│⇨ .hdvid
│⇨ .ping 
│⇨ .readviewonce
│⇨ .totalfitur
│⇨ .menu
│⇨ .myip
│⇨ .reportbug
│⇨ .listpem
│⇨ .liststicker
│⇨ .listimage
│⇨ .join
│⇨ .bctextbctext
│⇨ .poll
│⇨ .bcimage
│⇨ .bcvideo
│⇨ .creategc
│⇨ .setexif
│⇨ .userjid
│⇨ .userjid
│⇨ .setbotname
│⇨ .setbotbio
│⇨ .delppbot
│⇨ .restart
│⇨ .setppbot
│⇨ .addprem
│⇨ .delprem
│⇨ .addowner
│⇨ .delowner
│⇨ .addvn
│⇨ .delvn
│⇨ .addsticker
│⇨ .delsticker 
│⇨ .addimage
│⇨ .delimage
│⇨ .addvideo
│⇨ .delvideo
│⇨ .block
│⇨ .unblock del
│⇨ .leavegc
└
┃  🔰 *hdvid*
┃  🔰 *ping*
┃  🔰 *readviewonce*
┃  🔰 *totalfitur*
┃  🔰 *menu*
┃  🔰 *myip*
┃  🔰 *reportbug*
┃  🔰 *listpem*
┃  🔰 *liststicker*
┃  🔰 *listimage*
┃  🔰 *listvideo*
┃  🔰 *listvn*
┃  🔰 *listbadword*
┃  🔰 *listpc*
┃  🔰 *listgc*
┃  🔰 *owner*
┃  🔰 *jadibot*
┃  🔰 *listjadibot*
┃  🔰 *donate*
┃  🔰 *friend*
┃  🔰 *obfuscate*
┃  🔰 *styletext*
┃  🔰 *fliptext*
┃  🔰 *tts*
┃  🔰 *say*
┃  🔰 *togif*
┃  🔰 *toqr*
┃  🔰 *bass*
┃  🔰 *blown*
┃  🔰 *deep*
┃  🔰 *earrape*
┃  🔰 *fast*
┃  🔰 *fat*
┃  🔰 *nightcore*
┃  🔰 *reverse*
┃  🔰 *robot*
┃  🔰 *slow*
┃  🔰 *smooth*
┃  🔰 *squirrel*
┃  🔰 *tinyurl*
┃  🔰 *tovn*
┃  🔰 *tomp3*
┃  🔰 *toimg*
┃  🔰 *toonce*
┃  🔰 *sticker*
┃  🔰 *take*
┃  🔰 *emoji*
┃  🔰 *volume*
┃  🔰 *ebinary*
┃  🔰 *dbinary*
┃  🔰 *ssweb*
┃  🔰 *quoted*
┃  🔰 *runtime*
┗━━━━━━━━━━━➤
`}

global.rpgmenu = (prefix, hituet) => {
return`${global.gris}ʀ ᴘ ɢ - ᴍ ᴇ ɴ ᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *kerja*
┃  🔰 *fightnaga*
┃  🔰 *fightkucing*
┃  🔰 *fightphonix*
┃  🔰 *fightgriffin*
┃  🔰 *fightkyubi*
┃  🔰 *fightcentaur*
┃  🔰 *nabung*
┃  🔰 *mining*
┃  🔰 *bankcek*
┃  🔰 *maling*
┃  🔰 *banknabung*
┃  🔰 *banktarik*
┃  🔰 *berkebon*
┃  🔰 *crafting*
┃  🔰 *bet*
┃  🔰 *bonus*
┃  🔰 *buah*
┃  🔰 *nebang*
┃  🔰 *bekerja*
┃  🔰 *bansos*
┃  🔰 *taxy*
┃  🔰 *mulung*
┃  🔰 *berburu*
┃  🔰 *polisi*
┃  🔰 *berdagang*
┃  🔰 *rampok*
┃  🔰 *bunuh*
┃  🔰 *collect*
┃  🔰 *mancing*
┃  🔰 *repair*
┃  🔰 *feed*
┃  🔰 *fight*
┃  🔰 *gajian*
┃  🔰 *upgrade*
┃  🔰 *transfer*
┃  🔰 *shop*
┃  🔰 *selectskill*
┃  🔰 *sampah*
┃  🔰 *roket*
┃  🔰 *ojek*
┃  🔰 *nguli*
┃  🔰 *pasar*
┃  🔰 *rob*
┃  🔰 *referal*
┃  🔰 *petshop*
┃  🔰 *kolam*
┃  🔰 *koboy*
┃  🔰 *leaderboard*
┃  🔰 *casino*
┗━━━━━━━━━━━➤
`}

global.gamemenu = (prefix, hituet) => {
return`${global.gris}ɢ ᴀ ᴍ ᴇ - ᴍᴇɴᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *tebakkata*
┃  🔰 *tebaktebakan*
┃  🔰 *tebaklirik*
┃  🔰 *tebakgambar*
┃  🔰 *tebaklagu*
┃  🔰 *tebakkimia*
┃  🔰 *asahotak*
┃  🔰 *siapaaku*
┃  🔰 *susunkata*
┃  🔰 *tekateki*
┃  🔰 *tebakbendera*
┃  🔰 *tebakbenderav2*
┃  🔰 *tebakkabupaten*
┃  🔰 *caklontong*
┃  🔰 *family100*
┃  🔰 *werewolf*
┗━━━━━━━━━━━➤
`}

global.downloadmenu = (prefix) => { 
return`${global.gris}ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ᴍᴇɴᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *infogithub*
┃  🔰 *repo*
┃  🔰 *gitclone*
┃  🔰 *ytsearch/yts*
┃  🔰 *ttsearch*
┃  🔰 *tdl*
┃  🔰 *ytp3*
┃  🔰 *capcutdl*
┃  🔰 *play*
┃  🔰 *play2*
┃  🔰 *tiktok*
┃  🔰 *tt*
┃  🔰 *playstore*
┃  🔰 *fdroid*
┃  🔰 *fbdl*
┃  🔰 *igdl (igdl video only)*
┃  🔰 *igi (igdl image only)*
┃  🔰 *ytmp3*
┃  🔰 *ytmp4*
┃  🔰 *google*
┃  🔰 *ytp4*
┃  🔰 *weather*
┃  🔰 *wanumber*
┃  🔰 *playp*
┃  🔰 *twittervid*
┃  🔰 *telestick*
┃  🔰 *getvid*
┃  🔰 *happymod*
┃  🔰 *gdrive*
┃  🔰 *pinterest*
┃  🔰 *imgurl*
┃  🔰 *tourl*
┃  🔰 *ringtone*
┗━━━━━━━━━━━➤
`}

global.groupmenu = (prefix) => {
return`${global.gris}ɢ ʀ ᴏ ᴜ ᴘ - ᴍᴇɴᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *autoaigc*
┃  🔰 *warcall*
┃  🔰 *autosimi*
┃  🔰 *shizukachat*
┃  🔰 *mute*
┃  🔰 *setwelcome*
┃  🔰 *setleft*
┃  🔰 *welcome on/off*
┃  🔰 *antilink*
┃  🔰 *antiwame*
┃  🔰 *linkgc*
┃  🔰 *invite*
┃  🔰 *ephemeral*
┃  🔰 *delete*
┃  🔰 *setppgroup*
┃  🔰 *delppgroup*
┃  🔰 *setname*
┃  🔰 *setdesc*
┃  🔰 *add*
┃  🔰 *kick*
┃  🔰 *promote*
┃  🔰 *demote*
┃  🔰 *hidetag*
┃  🔰 *totag*
┃  🔰 *tagall*
┃  🔰 *editinfo*
┃  🔰 *opentime*
┃  🔰 *closetime*
┃  🔰 *resetlink*
┃  🔰 *getbio*
┃  🔰 *vote*
┃  🔰 *upvote*
┃  🔰 *downvote*
┃  🔰 *checkvote*
┃  🔰 *delvote*
┃  🔰 *autostickergc*
┃  🔰 *antilinkgc*
┃  🔰 *antiwame*
┃  🔰 *antilinkall*
┃  🔰 *antilinktiktok*
┃  🔰 *antilinkfb*
┃  🔰 *antilinktwitter*
┃  🔰 *antilinkig*
┃  🔰 *antilinktg*
┃  🔰 *antilinkytvid*
┃  🔰 *antilinkytch*
┃  🔰 *antivirus*
┃  🔰 *antitoxic*
┃  🔰 *react*
┃  🔰 *cekmati*
┃  🔰 *wanumber*
┃  🔰 *guess*
┃  🔰 *coin*
┗━━━━━━━━━━━➤
`}

global.funmenu = (prefix) => {
return`${global.gris}ғ ᴜ ɴ - ᴍ ᴇ ɴ ᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *smeme*
┃  🔰 *ppcouple*
┃  🔰 *define*
┃  🔰 *qc*
┃  🔰 *lyrics2*
┃  🔰 *lyrics*
┃  🔰 *suit*
┃  🔰 *math*
┃  🔰 *tictactoe*
┃  🔰 *fact*
┃  🔰 *truth*
┃  🔰 *dare*
┃  🔰 *couple*
┃  🔰 *soulmate*
┃  🔰 *stupidcheck*
┃  🔰 *handsomecheck*
┃  🔰 *uncleancheck*
┃  🔰 *hotcheck*
┃  🔰 *smartcheck*
┃  🔰 *greatcheck*
┃  🔰 *evilcheck*
┃  🔰 *dogcheck*
┃  🔰 *coolcheck*
┃  🔰 *waifucheck*
┃  🔰 *awesomecheck*
┃  🔰 *gaycheck*
┃  🔰 *cutecheck*
┃  🔰 *lesbiancheck*
┃  🔰 *hornycheck*
┃  🔰 *prettycheck*
┃  🔰 *lovelycheck*
┃  🔰 *uglycheck*
┃  🔰 *pick*
┃  🔰 *quotes*
┃  🔰 *can*
┃  🔰 *is*
┃  🔰 *when*
┃  🔰 *where*
┃  🔰 *what*
┃  🔰 *how*
┃  🔰 *rate*
┃  🔰 *cry*
┃  🔰 *kill*
┃  🔰 *bite*
┃  🔰 *yeet*
┃  🔰 *bully*
┃  🔰 *bonk*
┃  🔰 *wink*
┃  🔰 *poke*
┃  🔰 *nom*
┃  🔰 *slap*
┃  🔰 *smile*
┃  🔰 *wave*
┃  🔰 *awoo*
┃  🔰 *blush*
┃  🔰 *smug*
┃  🔰 *glomp*
┃  🔰 *happy*
┃  🔰 *dance*
┃  🔰 *cringe*
┃  🔰 *cuddle*
┃  🔰 *highfive*
┃  🔰 *shinobu*
┃  🔰 *handhold*
┃  🔰 *spank*
┃  🔰 *tickle*
┃  🔰 *avatar*
┃  🔰 *gecg*
┃  🔰 *checkme*
┗━━━━━━━━━━━➤
`}

global.stickermenu = (prefix) => {
return`${global.gris}s ᴛ ɪ ᴄ ᴋ ᴇ ʀ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *goose*
┃  🔰 *woof*
┃  🔰 *8ball*
┃  🔰 *lizard*
┃  🔰 *meow*
┃  🔰 *gura*
┃  🔰 *doge*
┃  🔰 *patrick*
┃  🔰 *lovestick*
┗━━━━━━━━━━━➤
`}

global.databasemenu = (prefix) => {
return`${global.gris}ᴅ ᴀ ᴛ ᴀ ʙ ᴀ s ᴇ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *setcmd*
┃  🔰 *delcmd*
┃  🔰 *listcmd*
┃  🔰 *lockcmd*
┃  🔰 *addmsg*
┃  🔰 *delmsg*
┃  🔰 *getmsg*
┃  🔰 *listmsg*
┗━━━━━━━━━━━➤
`}

global.aimenu = (prefix) => {
return`${global.gris}ᴏ ᴘ ᴇ ɴ - ᴀɪ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *ai*
┃  🔰 *autoai*
┃  🔰 *lenwyai*
┃  🔰 *luminai*
┃  🔰 *bcai*
┃  🔰 *muslimai*
┃  🔰 *leptonai*
┃  🔰 *diffusion-anime*
┃  🔰 *travel-assistant*
┃  🔰 *guru-ai*
┃  🔰 *hercai-cartoon*
┃  🔰 *hercai-animefy*
┃  🔰 *hercai-lexica*
┃  🔰 *hercai-prodia*
┃  🔰 *hercai-simurg*
┃  🔰 *hercai-raava*
┃  🔰 *hercai-shonin*
┃  🔰 *realistic*
┃  🔰 *3dmodel*
┃  🔰 *blackboxai* 
┗━━━━━━━━━━━➤
`}

global.quotesmenu = (prefix) => {
return`${global.gris}ᴏ̨ᴜᴏᴛᴇs-ᴍᴇɴᴜ ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *quotesanime*
┃  🔰 *quotesbacot*
┃  🔰 *quotesbucin*
┃  🔰 *quotesmotivasi*
┃  🔰 *quotesgalau*
┃  🔰 *quotesgombal*
┃  🔰 *quoteshacker*
┃  🔰 *quotesbijak*
┗━━━━━━━━━━━➤
`}
 
global.storemenu = (prefix) => {
return`${global.gris}s ᴛ ᴏ ʀ ᴇ - ᴍ ᴇ ɴ ᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *list*
┃  🔰 *addlist*
┃  🔰 *dellist*
┃  🔰 *update*
┃  🔰 *jeda*
┃  🔰 *tambah*
┃  🔰 *kurang*
┃  🔰 *kali*
┃  🔰 *bagi*
┃  🔰 *delsetdone*
┃  🔰 *changedone*
┃  🔰 *setdone*
┃  🔰 *delproses*
┃  🔰 *changeproses*
┃  🔰 *setproses*
┃  🔰 *proses <reply chat>*
┃  🔰 *done <reply chat>*
┗━━━━━━━━━━━➤
`}

global.anonymousmenu = (prefix) => {
return`${global.gris}ᴀɴᴏɴʏᴍᴏᴜs-ᴍᴇɴᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *anonymouschat*
┃  🔰 *start*
┃  🔰 *next*
┃  🔰 *stop*
┃  🔰 *sendprofile*
┃  🔰 *menfess*
┃  🔰 *confess*
┃  🔰 *balasmenfess*
┃  🔰 *tolakmenfess*
┃  🔰 *stopmenfess*
┗━━━━━━━━━━━➤
`}

global.pushmenu = (prefix) => {
return`${global.gris}ᴘ ᴜ s ʜ - ᴍᴇɴᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *cekidgc*
┃  🔰 *pushkontak*
┃  🔰 *pushkontakv2*
┃  🔰 *pushkontakv3*
┃  🔰 *pushkontakv4*
┃  🔰 *savekontakv*
┃  🔰 *savekontakv2*
┃  🔰 *getkontak*
┃  🔰 *sendkontak*
┃  🔰 *jpm*
┃  🔰 *jpm2*
┗━━━━━━━━━━━➤
`}

global.cpanelmenu = (prefix) => {
return`${global.gris}ᴄ ᴘ ᴀ ɴ ᴇ ʟ - ᴍᴇɴᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *panel*
┃  🔰 *listusr*
┃  🔰 *delusr*
┃  🔰 *listsrv*
┃  🔰 *delsrv*
┃  🔰 *tutorial*
┃  🔰 *ramlist*
┃  🔰 *premlist*
┃  🔰 *addusr*
┃  🔰 *addsrv*
┃  🔰 *updatesrv*
┃  🔰 *suspend*
┃  🔰 *unsuspend*
┃  🔰 *createadmin*
┃  🔰 *listadmin*
┗━━━━━━━━━━━➤
${global.gris}ADD PANEL${global.gris}
.1gb
.2gb
.3gb
.4gb
.5gb
.6gb
.7gb
.8gb
.unli
.ram
.1gb Tan,628xxxxx
`}

global.randomphotomenu = (prefix) => {
return`${global.gris}ʀ ᴀ ɴ ᴅ ᴏ ᴍ - ᴘ ʜ ᴏ ᴛ ᴏ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *aesthetic*
┃  🔰 *coffee*
┃  🔰 *wikimedia*
┃  🔰 *wallpaper*
┃  🔰 *art*
┃  🔰 *bts*
┃  🔰 *dogwoof*
┃  🔰 *catmeow*
┃  🔰 *lizardpic*
┃  🔰 *goosebird*
┃  🔰 *8ballpool*
┃  🔰 *cosplay*
┃  🔰 *hacker*
┃  🔰 *cyber*
┃  🔰 *gamewallpaper*
┃  🔰 *islamic*
┃  🔰 *jennie*
┃  🔰 *jiso*
┃  🔰 *satanic*
┃  🔰 *justina*
┃  🔰 *cartoon*
┗━━━━━━━━━━━➤
`}

global.primbonmenu = (prefix) => {
  return `${global.gris}ᴘ ʀ ɪ ᴍ ʙ ᴏ ɴ - ᴍ ᴇ ɴ ᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *artimimpi*
┃  🔰 *artinama*
┃  🔰 *ramaljodoh*
┃  🔰 *ramaljodohbali*
┃  🔰 *suamiistri*
┃  🔰 *ramalcinta*
┃  🔰 *cocoknama*
┃  🔰 *pasangan*
┃  🔰 *jadiannikah*
┃  🔰 *sifatusaha*
┃  🔰 *rezeki*
┃  🔰 *pekerjaan*
┃  🔰 *nasib*
┃  🔰 *penyakit*
┃  🔰 *tarot*
┃  🔰 *fengshui*
┃  🔰 *haribaik*
┃  🔰 *harisangar*
┃  🔰 *harisial*
┃  🔰 *nagahari*
┃  🔰 *arahrezeki*
┃  🔰 *peruntungan*
┃  🔰 *weton*
┃  🔰 *karakter*
┃  🔰 *keberuntungan*
┃  🔰 *memancing*
┃  🔰 *masasubur*
┃  🔰 *zodiak*
┃  🔰 *shio*
┗━━━━━━━━━━━➤
`}

global.islamimenu= (prefix) => {
return`${global.gris}ɪ s ʟ ᴀ ᴍ ɪ - ᴍᴇɴᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *kisahnabi*
┃  🔰 *asmaulhusna*
┃  🔰 *bacaansholat*
┃  🔰 *audiosurah*
┃  🔰 *ayatkursi*
┃  🔰 *doaharian*
┃  🔰 *niatsholat*
┃  🔰 *quotesislami*
┃  🔰 *doatahlil*
┗━━━━━━━━━━━➤
`}

global.textpromenu = (prefix) => {
return`${global.gris}ᴛ ᴇ x ᴛ ᴘ ʀ ᴏ - ᴍ ᴀ ᴋ ᴇ ʀ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *attp*
┃  🔰 *ttp*
┃  🔰 *ktpmaker*
┃  🔰 *carimusik*
┃  🔰 *candy*
┃  🔰 *christmas*
┃  🔰 *3dchristmas*
┃  🔰 *sparklechristmas*
┃  🔰 *deepsea*
┃  🔰 *scifi*
┃  🔰 *rainbow*
┃  🔰 *waterpipe*
┃  🔰 *spooky*
┃  🔰 *pencil*
┃  🔰 *circuit*
┃  🔰 *discovery*
┃  🔰 *metalic*
┃  🔰 *fiction*
┃  🔰 *demon*
┃  🔰 *transformer*
┃  🔰 *berry*
┃  🔰 *thunder*
┃  🔰 *magma*
┃  🔰 *3dstone*
┃  🔰 *neonlight*
┃  🔰 *glitch*
┃  🔰 *harrypotter*
┃  🔰 *brokenglass*
┃  🔰 *papercut*
┃  🔰 *watercolor*
┃  🔰 *multicolor*
┃  🔰 *neondevil*
┃  🔰 *underwater*
┃  🔰 *graffitibike*
┃  🔰 *snow*
┃  🔰 *cloud*
┃  🔰 *honey*
┃  🔰 *ice*
┃  🔰 *fruitjuice*
┃  🔰 *biscuit*
┃  🔰 *wood*
┃  🔰 *chocolate*
┃  🔰 *strawberry*
┃  🔰 *matrix*
┃  🔰 *blood*
┃  🔰 *dropwater*
┃  🔰 *toxic*
┃  🔰 *lava*
┃  🔰 *rock*
┃  🔰 *bloodglas*
┃  🔰 *hallowen*
┃  🔰 *darkgold*
┃  🔰 *joker*
┃  🔰 *wicker*
┃  🔰 *firework*
┃  🔰 *skeleton*
┃  🔰 *blackpink*
┃  🔰 *sand*
┃  🔰 *glue*
┃  🔰 *1917*
┃  🔰 *leaves*
┃  🔰 *retro*
┃  🔰 *pornhub*
┃  🔰 *8bit*
┃  🔰 *batman*
┃  🔰 *3dbox*
┃  🔰 *lion*
┃  🔰 *3davengers*
┃  🔰 *window*
┃  🔰 *3dspace*
┃  🔰 *bokeh*
┃  🔰 *holographic*
┃  🔰 *thewall*
┃  🔰 *carbon*
┃  🔰 *whitebear*
┃  🔰 *metallic*
┃  🔰 *steel*
┃  🔰 *fabric*
┃  🔰 *ancient*
┃  🔰 *marvel*
┗━━━━━━━━━━━➤
`}

global.photooxymenu = (prefix) => {
return`${global.gris}ᴘ ʜ ᴏ ᴛ ᴏ ᴏ x ʏ - ᴍ ᴀ ᴋ ᴇ ʀ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *shadow*
┃  🔰 *write*
┃  🔰 *romantic*
┃  🔰 *burnpaper*
┃  🔰 *smoke*
┃  🔰 *narutobanner*
┃  🔰 *love*
┃  🔰 *undergrass*
┃  🔰 *doublelove*
┃  🔰 *coffecup*
┃  🔰 *underwaterocean*
┃  🔰 *smokyneon*
┃  🔰 *starstext*
┃  🔰 *rainboweffect*
┃  🔰 *balloontext*
┃  🔰 *metalliceffect*
┃  🔰 *embroiderytext*
┃  🔰 *flamingtext*
┃  🔰 *stonetext*
┃  🔰 *writeart*
┃  🔰 *summertext*
┃  🔰 *wolfmetaltext*
┃  🔰 *nature3dtext*
┃  🔰 *rosestext*
┃  🔰 *naturetypography*
┃  🔰 *quotesunder*
┃  🔰 *shinetext*
┗━━━━━━━━━━━➤
`}

global.ephoto360menu = (prefix) => {
return`${global.gris}ᴇ ᴘ ʜ ᴏ ᴛ ᴏ - ᴍ ᴀ ᴋ ᴇ ʀ
┏━━━━━━━━━━━➤
┃  🔰 *glitchtext*
┃  🔰 *writetext*
┃  🔰 *advancedglow*
┃  🔰 *typographytext*
┃  🔰 *pixelglitch*
┃  🔰 *neonglitch*
┃  🔰 *flagtext*
┃  🔰 *flag3dtext*
┃  🔰 *deletingtext*
┃  🔰 *blackpinkstyle*
┃  🔰 *glowingtext*
┃  🔰 *underwatertext*
┃  🔰 *logomaker*
┃  🔰 *cartoonstyle*
┃  🔰 *papercutstyle*
┃  🔰 *watercolortext*
┃  🔰 *effectclouds*
┃  🔰 *blackpinklogo*
┃  🔰 *gradienttext*
┃  🔰 *summerbeach*
┃  🔰 *luxurygold*
┃  🔰 *multicoloredneon*
┃  🔰 *sandsummer*
┃  🔰 *galaxywallpaper*
┃  🔰 *1917style*
┃  🔰 *makingneon*
┃  🔰 *royaltext*
┃  🔰 *freecreate*
┃  🔰 *galaxystyle*
┃  🔰 *lighteffects*
┗━━━━━━━━━━━➤
`}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
