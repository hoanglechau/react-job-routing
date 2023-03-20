const Auth = {
  isAuthenticated: false,
  signIn(callback) {
    Auth.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signOut(callback) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default Auth;
