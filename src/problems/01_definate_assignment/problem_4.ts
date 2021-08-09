let password: string = "P4ssw*rD";

const isStrong = (password: string) => {
  const hasNum = /[1-0]/.test(password);
  const hasCapital = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@£$%^&*()?.,]/.test(password);
  return hasNum && hasCapital && hasSpecialChar;
};
isStrong(password);
