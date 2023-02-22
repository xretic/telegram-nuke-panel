import { Guild } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	guild.channels.cache.forEach(async (channel) => {
		await channel.delete().catch(() => {});
	});
};
