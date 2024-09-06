require('dotenv').config();
const gamer = "gamer"
const {Client, IntentsBitField, SlashCommandBuilder} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const pingcommand = require('./pingcommand');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.once('ready', async () => {
    try {
        const guild = client.guilds.cache.get('1195924636676935830'); // Replace with your Guild ID
        await guild.commands.set(commands);
        console.log('Slash commands registered');
    } catch (error) {
        console.error(error);
    }
    console.log(`Logged in as ${client.user.tag}!`);
});

// Command handling
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});



// eventHandler(client)


client.login(process.env.DISCORD_KEY)

