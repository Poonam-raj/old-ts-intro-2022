let greeting: unknown = "Good morning typescript enthusiast";

const shoutGreeting = (greet: unknown) => {
	console.log(greet.toUpperCase());
};
shoutGreeting(greeting);
