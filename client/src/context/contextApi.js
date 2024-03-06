import React, { createContext, useState, useEffect } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";

export const Context = createContext();

export const AppContext = (props) => {
    const [isLoading, setIsLoading]  = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory , setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false)

    const fetchSelectedCategory = (query) => {
        setIsLoading(true);
        fetchFromApi(`search/?q=${query}`)
            .then((res) => {
                console.log(res);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchSelectedCategory(selectedCategory)
    }, [selectedCategory]);

    return (
        <Context.Provider
        value = {{
            isLoading,
            setIsLoading,
            searchResults,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

