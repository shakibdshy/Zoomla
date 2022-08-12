import React, { createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Context = createContext()

export const StateContext = ({ children }) => {
    const [events, setEvents, loading, error] = useFetch()

    return (
        <Context.Provider value={[events, setEvents, loading, error]}>
            {children}
        </Context.Provider>
    )
}

export const UseStateContext = () => useContext(Context);