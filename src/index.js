const { Client, IntentsBitField, Message, InteractionCollector } = require('discord.js');
require('dotenv').config()


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`);
});

const quoteList = [
    "Your girls cheating on you and you're here playing with a discord bot...",
    "Bitches ain't shit",
    "I miss her..",
    "Congratulations!!! You won nothing and you're still broke..",
    "Leave £10 on your table it'll be there in the morning, can't say the same for a girl tho..",
    "Kiss your partner with your eyes open, they can cheat in that split second..",
    "She's messaging someone else rn king...forget her.",
    "I'm currently making money while your mans sleeping..",
    "Love isn't real stink..."


]

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return
    if (interaction.commandName == "quote"){
        function randomNumGen(max) {
            let randomNum = Math.floor(Math.random()*max)
            interaction.reply(quoteList[randomNum]);
        }
        randomNumGen(8)   
    }
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "say"){
        const copiedComment = interaction.options.getString('speech')
        await interaction.reply({ content: 'Confirmed your message!', ephemeral: true });

        interaction.channel.send(`${copiedComment}`)
    }
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "send"){
        if (interaction.user.id != "771907578770227213" || "792149452944179220" || "483227097267961867"){
            const targetUser = interaction.options.getUser('user');
            const targetContentMessage = interaction.options.getString('content');
            await interaction.reply({ content: 'Confirmed your message!', ephemeral: true });
    
            client.users.send(targetUser.id, targetContentMessage)
        }else{
            await interaction.reply({ content: 'You dont have access to that command.', ephemeral: true})
        }
    }
})

client.login(process.env.TOKEN);
