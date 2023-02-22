import { Guild, ChannelType } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	try {
		for (const channel of guild.channels.cache.map((x) => x)) {
			if (channel.type !== ChannelType.GuildText) continue;

			await channel.send("@everyone https://github.com/xretic");
		}
	} catch (error) {
		console.log(error);
	}
};
