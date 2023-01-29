const KEYS = {
  USER_ID: "UID"
}

export const isUserLoggedIn = Boolean(sessionStorage.getItem(KEYS.USER_ID));

export const studentLogin = (studentCode) => sessionStorage.setItem(KEYS.USER_ID, studentCode);