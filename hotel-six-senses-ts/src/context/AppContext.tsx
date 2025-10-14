import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AppContextType = {
    isMenuOpen: boolean
    setIsMenuOpen: (isMenuOpen: boolean) => void
    selectedRoom: string | null
    setSelectedRoom: (room: string | null) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode
}
export const AppProvider = ({ children }: AppProviderProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); //abrir / cerrar menu
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null); // aññadir hab a la reserva




    return (
        <AppContext.Provider
            value={{

                isMenuOpen,
                setIsMenuOpen,
                selectedRoom,
                setSelectedRoom,

            }}
        >
            {children}
        </AppContext.Provider>
    );
}
/* eslint-disable react-refresh/only-export-components */
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context
}
