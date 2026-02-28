export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
    message: "Email must be like example@domain.com",
  },
};
export const passwordValidation = {
  required: "Password is required",
  pattern: {
    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    message:
      "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*)",
  },
};
export const confirmPasswordValidation = (getPasswordValue) => ({
  required: "Confirm password is required",
  validate: (value) =>
    value === getPasswordValue() || "Passwords do not match",
});
export const otpValidation = {
  validate: {
    requiredLength: (value) =>
      value.join("").length === 6 || "Must be 6 digits",
    onlyNumbers: (value) =>
      value.every((v) => /^\d$/.test(v)) || "Must be digits only",
  },
};