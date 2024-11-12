import { createContext, useState } from "react";

type AppContextType = {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <AppContext.Provider value={{ isSidebarOpen, isModalOpen, openModal, openSidebar, closeModal, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
