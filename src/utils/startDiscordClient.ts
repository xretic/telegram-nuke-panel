import { IntentsBitField, Client } from "discord.js";

export default async (token: string): Promise<Client | 404> => {
	const client = new Client({
		intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers],
	});

	try {
		await client.login(token);
		return client;
	} catch {
		return 404;
	}
};
