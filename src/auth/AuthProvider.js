import React, { useState } from 'react';
import Auth from './auth';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (newUser, callback) => Auth.signIn(() => {
    setUser(newUser);
    callback();
  });

  const signOut = (callback) => Auth.signOut(() => {
    setUser(null);
    callback();
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
