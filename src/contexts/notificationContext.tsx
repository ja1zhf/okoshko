'use client';

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface NotificationContextType {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <NotificationContext.Provider value={{ count, setCount }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};