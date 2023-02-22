import bootstrap from "./common/bootstrap";

bootstrap()
	.catch((error: Error) => {
		throw new Error(error.message);
	})
	.then(() => console.log("App started!"));
