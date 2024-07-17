const validationMessages = Object.freeze({
  usernameRequired: "Please tell us your name!",
  usernameErr: "Username can only contain letters and spaces",
  usernameLength: "Username must contain between 3 and 20 characters.",
  usernameRules:
    "Usernames can only contain letters, numbers, underscores and dashes",
  emailRequired: "Please check your email address",
  emailConfirm: "Emails are not the same",
  password: "Please provide a password",
  passwordConfirm: "Please check your password",
  passwordLength: "Password contain at least 8 characters",
  passwordRules:
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  ageRules: "Age must be between 16 and 100",
  escaped: "Invalid characters were escaped",
  boolean: "Value must be true or false",
  string: "Value must be a string",
});

export default validationMessages;
