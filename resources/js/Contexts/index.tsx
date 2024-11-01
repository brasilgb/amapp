import moment, { now } from "moment";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({} as any);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [dataFiltro, setDataFiltro] = useState<any>(moment().format("YYYY-MM-DD"));
    const [alteredAnalise, setAlteredAnalise] = useState<string>('faturamento');
    const [filialAnalise, setFilialAnalise] = useState(1);
    const [selectedDay, setSelectedDay] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{
                dataFiltro,
                setDataFiltro,
                alteredAnalise,
                setAlteredAnalise,
                filialAnalise,
                setFilialAnalise,
                selectedDay,
                setSelectedDay,
                loading,
                setLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);
