import React, { createContext, useContext, useState} from "react";

const City = createContext();

export const CityProvider = ({children}) => {
    const [city, setCity] = useState("adana")

    

    const values = {
        city,
        setCity,
    }

    return <City.Provider value={values}>
{children}</City.Provider>
}

export const useCity = () => {
    const context = useContext(City);

    if (context === undefined) {
        throw new Error("Must used inside a CityProvider!")
    }

    return context
}




