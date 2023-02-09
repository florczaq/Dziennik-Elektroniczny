import CryptoJS from "crypto-js";

const KEYS = {
  USER: "UD"
}

const encryptionKey = "1qazXSW@";

export const isUserLoggedIn = Boolean(sessionStorage.getItem(KEYS.USER));

export const studentLogin = (student) => sessionStorage.setItem(KEYS.USER, CryptoJS.AES.encrypt(JSON.stringify(student), encryptionKey).toString());

export const getLoggedStudentInfo = () => isUserLoggedIn && JSON.parse(
  	CryptoJS.AES.decrypt(sessionStorage.getItem(KEYS.USER), encryptionKey
  ).toString(CryptoJS.enc.Utf8));

