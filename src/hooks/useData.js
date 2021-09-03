import  { useState, useContext, createContext } from 'react'

const initialState = 100

const DataContext = createContext(initialState)

export function useData() {
    return useContext(DataContext)
}

export function DataProvider({children}) {
    const [state, setState] = useState(initialState)
    return <DataContext.Provider value={[state, setState]}>{children}</DataContext.Provider>
}
useData()