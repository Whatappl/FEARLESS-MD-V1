const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "𓄂☠️🇫ᥱᥲrᥣᥱss🤴🏻𝐊i͜͡n̸𝙂🇵🇰༗";
global.BotName = "🐦Fearless-md-v1";
global.packname = ".𓄂☠️🇫ᥱᥲrᥣᥱss🤴🏻𝐊i͜͡n̸𝙂🇵🇰༗";                             //Do not change.
global.author = "🐦Fearless md 𓄂☠️𝐅ᴇa̷r͜͡l͡e̶Ꭶs͜͡🤴🏻𝐊i͜͡n̸𝙂🇵🇰༗";                               //Do not change.
global.BotSourceCode = "https://github.com/Fearless-tech1/FEARLESS-MD-V1"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/FrZMclZccad72BbiRlHFKa "; 
global.SupportGroupLink = "https://chat.whatsapp.com/FrZMclZccad72BbiRlHFKa"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/50941392672"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || ``
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./https://telegra.ph/file/68788408ecf55f6358eca.jpg");
global.Thumb = fs.readFileSync("./https://telegra.ph/file/68788408ecf55f6358eca.jpg");
global.Thumb1 = fs.readFileSync("./https://telegra.ph/file/68788408ecf55f6358eca.jpg");
global.ErrorPic = fs.readFileSync("./https://telegra.ph/file/68788408ecf55f6358eca.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
