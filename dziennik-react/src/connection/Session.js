const KEYS = {
  USER: "UD"
}

export const isUserLoggedIn = Boolean(sessionStorage.getItem(KEYS.USER));

export const studentLogin = (student) => sessionStorage.setItem(KEYS.USER, JSON.stringify(student));