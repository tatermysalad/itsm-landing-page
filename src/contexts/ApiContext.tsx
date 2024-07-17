import React, { createContext, useState, ReactNode } from "react";

declare let importMeta: ImportMeta;

const ItsmUrl = importMeta.env.VITE_ITSM_BASE_URL;

interface ApiContextProps {
    itsmApi: string;
    setItsmApi: React.Dispatch<React.SetStateAction<string>>;
}

export const ApiContext = createContext<ApiContextProps | null>(null);

interface Props {
    children: ReactNode;
}

const ApiProvider: React.FC<Props> = ({ children }) => {
    const [itsmUrl, setItsmUrl] = useState<string>(ItsmUrl);
    
    return (
        <ApiContext.Provider
            value={{
                itsmApi: itsmUrl,
                setItsmApi: setItsmUrl
            }}>
            {children}
        </ApiContext.Provider>
    );
}

export default ApiProvider;