import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser, updateUser } from '../store/authSlice';

export const AuthContext = createContext({
  user: null,
  signup: () => {},
  signin: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const loadUsers = () => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const persistUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const persistCurrentUser = (user) => {
  if (!user) {
    localStorage.removeItem('currentUser');
  } else {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
};

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }, []);

  const signup = (formData) => {
    const users = loadUsers();

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      interests: [],
      movies: [],
    };

    users.push(newUser);
    persistUsers(users);
    persistCurrentUser(newUser);
    dispatch(setUser(newUser));
  };

  const signin = (email, password) => {
    const users = loadUsers();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!foundUser) {
      return false;
    }

    persistCurrentUser(foundUser);
    dispatch(setUser(foundUser));
    return true;
  };

  const logout = () => {
    persistCurrentUser(null);
    dispatch(clearUser());
  };

  const updateUserProfile = (partialUser) => {
    if (!user) return;

    const updatedUser = { ...user, ...partialUser };
    const users = loadUsers().map((u) =>
      u.email === updatedUser.email ? updatedUser : u,
    );

    persistUsers(users);
    persistCurrentUser(updatedUser);
    dispatch(updateUser(updatedUser));
  };

  const value = useMemo(
    () => ({
      user,
      signup,
      signin,
      logout,
      updateUserProfile,
    }),
    [user],
  );

  return React.createElement(
    AuthContext.Provider,
    { value },
    children,
  );
};
