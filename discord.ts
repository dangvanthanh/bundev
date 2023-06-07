import { Client, Events, IntentsBitField } from 'discord.js';

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
