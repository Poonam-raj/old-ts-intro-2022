let password: unknown = "P4ssw*rD";

const isStrong = (password: unknown) => {
	const hasNum = /[1-0]/.test(password);
	const hasCapital = /[A-Z]/.test(password);
	const hasSpecialChar = /[!@£$%^&*()?.,]/.test(password);
	return hasNum && hasCapital && hasSpecialChar;
};
isStrong(password);
