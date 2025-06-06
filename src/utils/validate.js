export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const validatePassword = (password) => /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/.test(password);
export const validateName = (name) => name.length >= 20 && name.length <= 60;
export const validateAddress = (address) => address.length <= 400;