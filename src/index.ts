import bootstrap from "./common/bootstrap";
import { config } from "dotenv";

config({
	path: ".env",
});

bootstrap()
	.catch((error: Error) => {
		throw new Error(error.message);
	})
	.then(() => console.log("App started!"));
