import { useEffect, useMemo, useState } from "react"

import Clicker from "./Clicker.jsx"
import TotalCount from "./TotalCount.jsx"
import People from "./People.jsx"

export default function App({ clickerCount })
{
    // HIDE/SHOW CLICKER BUTTON
    const [hasClicker, setHasClicker] = useState(true)

    // HIDE/SHOW CLOCKER BUTTON CLICK
    const tooggleClickersButton = () =>
    {
        removeTotalCount()
        setHasClicker(!hasClicker)
    }

    // SAVE RANDOM COLORS
    const randomColors = useMemo(() =>
    {
        // array with colors for randomColors
        const colors = [
            "#d53e4f", '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'
        ]

        // create empty array with the same number of elements
        const randomColors = [...Array(clickerCount)]

        for (let i = 0; i < clickerCount; i++)
        {
            const index = Math.floor(
                Math.random() * colors.length
            )
            randomColors[i] = colors[index]
        }

        return randomColors

    }, [clickerCount, hasClicker])


    // TOTAL COUNT
    const [totalCount, setTotalCount] = useState(() =>
    {
        // якщо немає в локалє значення, то за замовченням 0
        return parseInt(localStorage.getItem('totalCount')) || 0
    })

    const incrementTotalCount = () =>
    {
        setTotalCount(totalCount + 1)
    }

    // TOTAL COUNT -> LOCAL STORAGE
    useEffect(() =>
    {
        localStorage.setItem('totalCount', totalCount)
    }, [totalCount])

    // REMOVE TOTAL COUNT (use in tooggleClickersButton())
    function removeTotalCount()
    {
        if (hasClicker)
        {
            setTotalCount(0)
            localStorage.removeItem('totalCount')
        }
    }

    return <>
        <div className="body__ui__toogle">
            <button className={hasClicker ? "body__buttonHide" : "body__buttonShow"} onClick={tooggleClickersButton}>{hasClicker ? 'Hide' : "Show"} Clicker</button>
        </div>
        <div className="body__ui__buttons">

            {hasClicker ?
                <>
                    {
                        [...Array(clickerCount)].map((value, index) =>
                            <Clicker
                                key={index}
                                increment={incrementTotalCount}
                                keyName={`count${index}`}
                                color={randomColors[index]}
                            />
                        )
                    }
                </>
                : null}

            {/* {hasClicker ? <Clicker increment={incrementTotalCount} keyName='count01' color={randomColors[index]} /> : null}
            {hasClicker ? <Clicker increment={incrementTotalCount} keyName='count02' color={randomColors[index]} /> : null}
            {hasClicker ? <Clicker increment={incrementTotalCount} keyName='count03' color={randomColors[index]} /> : null} */}

        </div>
        <div>
            {hasClicker ? <TotalCount totalCount={totalCount} /> : null}
        </div>

        <div> <People /> </div>

    </>
}