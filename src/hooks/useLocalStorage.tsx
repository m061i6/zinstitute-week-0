import { useEffect, useState } from "react"
export function useLocalStorage<T>(key: string, initialValue: T | (() => T) ){
    const  [value,setValue] = useState<T>(()=>{
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.stringify(jsonValue)

        if(typeof initialValue === "undefined") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {

    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
