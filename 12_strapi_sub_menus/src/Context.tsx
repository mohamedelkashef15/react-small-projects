import { createContext, useState } from "react";

type AppContextType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>{children}</AppContext.Provider>;
}

export default AppContext;
