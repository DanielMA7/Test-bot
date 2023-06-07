require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

const commands = [
  {
    name: "quote",
    description: "Sends one of Mario's famous quotes"
  },
  {
    name: "say",
    description: "Repeats a comment",
    options: [
        {
            name: "speech",
            description: "Speech that is going to be copied",
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ]
  },
  {
    name: "send",
    description: "Sends private message to a user",
    options: [
      {
        name: "user",
        description: "User you are sending the message to",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
      {
        name: "content",
        description: "The message you would like to send.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
  {
    name: "cme",
    description: "Sends private message to a user",
    options: [
    {
      name: "embed",
      description: "Do you want your message embedded or not?",
      type: ApplicationCommandOptionType.Boolean,
      required: true,
    }
  ]
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();