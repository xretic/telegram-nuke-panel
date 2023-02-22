import { Guild } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	guild.roles.cache.forEach(async (role) => {
		await role.delete().catch(() => {});
	});
};
