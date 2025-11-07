import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Property } from '../types/property'; // Import Property type

interface ContextProps {
  isButtonClicked: boolean;
  handleButtonClick: () => void;
  loading: boolean;
  handleLoading: () => void;
  isReserveClicked: boolean;
  handleReserve: () => void;
  handleCancel: () => void;
  selectedProperty: Property | null; // Add selectedProperty
  setSelectedProperty: (property: Property | null) => void; // Add setSelectedProperty
}

export const MyContext = createContext<ContextProps | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isReserveClicked, setIsReserveClicked] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null); // Initialize selectedProperty

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
    <MyContext.Provider value={{ isButtonClicked, handleButtonClick, loading, handleLoading, isReserveClicked, handleReserve, handleCancel, selectedProperty, setSelectedProperty }}>
      {children}
    </MyContext.Provider>
  );
};
