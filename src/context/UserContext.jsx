import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const UserContext = createContext({});

const userDataFromLocalStorage = JSON.parse(
  localStorage.getItem('userData')
) || {
  email: '',
};

function UserProvider({ children }) {
  const [userData, setUserData] = useState(userDataFromLocalStorage);

  const updateUserData = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;