require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js')

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is running!`)
})

client.login('MTI3NjgyNjkwMzA3NjE0NzIxMA.GG9ZME.9eIbNAu7wnhiyV-Of2-KtYN2XjyYcqahVp4lZc')

