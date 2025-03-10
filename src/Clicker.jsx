import { useEffect, useState } from "react"


export default function Clicker({ increment, keyName, color })
{

    const countIdle = parseInt(localStorage.getItem(keyName) ?? 0) // to fix double render because useEffects change count from 0 to localStorage value
    const [count, setCount] = useState(countIdle)

    useEffect(() =>
    {
        return () =>
        {
            localStorage.removeItem(keyName)
        }

    }, [])

    useEffect(() =>
    {
        localStorage.setItem(keyName, count)
    }, [count])

    const buttonClick = () =>
    {
        setCount(count + 1)
        increment()
    }

    return < >
        <button style={{ color: '#000000', backgroundColor: color }} className="body__buttons" onClick={buttonClick}>Click me: {count}</button >
    </>
}




