import React, { Children, createContext } from 'react';


export const AuthContext = createContext();

const UserContext = ({Children}) => {

  const authInfo = {};

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
              {Children}
           </AuthContext.Provider>
        </div>
    );
};

export default UserContext;