import { useState, useEffect } from "react"

export default function People()
{
    const [people01, setPeople01] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jack' },
        { id: 3, name: 'Artem' },
        { id: 4, name: 'Dam' },
    ])

    const [people02, setPeople02] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jack' },
        { id: 3, name: 'Artem' },
        { id: 4, name: 'Dam' },
    ])

    const link = 'https://jsonplaceholder.typicode.com/users'

    const getPeoplePromise = () =>
    {
        fetch(link)
            .then(response => response.json())
            .then(result =>
            {
                console.log(result)
                setPeople01(result)
            })
    }

    const getPeopleAsync = async () =>
    {
        const response = await fetch(link)
        const result = await response.json()
        setPeople02(result)
    }

    useEffect(() =>
    {
        getPeoplePromise()
        getPeopleAsync()
    }, [])

    return <div className="people">
        <h2>People</h2>
        <div className="people__card">
            <div className="people__promise">
                <h3>Using Promise</h3>
                <ul>
                    {
                        people01.map(person =>
                            <li key={person.id}> {person.name}</li>
                        )
                    }
                </ul>
            </div>
            <div className="people__async">
                <h3>Using Async</h3>
                <ul>
                    {
                        people02.map(person =>
                            <li key={person.id}> {person.name}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
}