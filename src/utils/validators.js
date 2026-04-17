export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/,
    message: "Email must be like example@domain.com",
  },
};
export const passwordValidation = {
  required: "Password is required",
  pattern: {
    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}$/,
    message:
      "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*_)",
  },
};
export const loginPasswordValidation = {
  required: "Password is required",
};
export const confirmPasswordValidation = (getPasswordValue) => ({
  required: "Confirm password is required",
  validate: (value) =>
    value === getPasswordValue() || "Passwords do not match",
});
export const otpValidation = {
  validate: {
    requiredLength: (formValues) => {
      const otp = formValues?.otp;

      if (!Array.isArray(otp)) return true;

      return otp.join("").length === 6 || "Must be 6 digits";
    },

    onlyNumbers: (formValues) => {
      const otp = formValues?.otp;

      if (!Array.isArray(otp)) return true;

      return otp.every((v) => /^\d$/.test(v)) || "Must be digits only";
    },
  },
};
export const phoneValidation = {
    required: "Phone is required",
    pattern: {
        value: /^(\+20|0)1[0125]\d{8}$/,
        message: "Invalid Egyptian phone number (e.g. 01xxxxxxxxx or +201xxxxxxxxx)"
    }
}