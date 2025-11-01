import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ContextProps {
  isButtonClicked: boolean;
  handleButtonClick: () => void;
  loading: boolean;
  handleLoading: () => void;
  isReserveClicked: boolean;
  handleReserve: () => void;
  handleCancel: () => void;
}

export const MyContext = createContext<ContextProps | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isReserveClicked, setIsReserveClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleReserve = () => {
    setIsReserveClicked(true);
    setIsButtonClicked(false);
    setTimeout(() => {
        setIsReserveClicked(false);
      }, 3000);
  };

  const handleCancel = () => {
    setIsButtonClicked(false);
  };

  return (
    <MyContext.Provider value={{ isButtonClicked, handleButtonClick, loading, handleLoading, isReserveClicked, handleReserve, handleCancel }}>
      {children}
    </MyContext.Provider>
  );
};
