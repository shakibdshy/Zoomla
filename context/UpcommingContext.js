import React, { createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Context = createContext()

export const StateContext = ({ children }) => {
    const [event, setEvent] = useFetch()

    return (
        <Context.Provider value={[event, setEvent]}>
            {children}
        </Context.Provider>
    )
}

export const UseStateContext = () => useContext(Context);