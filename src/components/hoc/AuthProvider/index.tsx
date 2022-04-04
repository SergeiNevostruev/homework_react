import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext(null);

type Prop = {
  children: React.ReactChild | React.ReactNode;
};

export const AuthProvider = ({ children }: Prop) => {
  const [user, setUser] = useState(null);

  const signin: any = (newUser: any, cb: any) => {
    setUser(newUser);
    cb();
  };

  const signout: any = (cb: any) => {
    setUser(null);
    cb();
  };

  const value: any = useMemo(
    () => ({
      user,
      signin,
      signout,
    }),
    []
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
