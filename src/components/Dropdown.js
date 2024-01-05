import React, { useState } from 'react'
import { useCity } from '../context/City';
import "../App.css"

function Dropdown() {

    const [getCity, setGetCity] = useState("")
    const { city, setCity } = useCity()

    const famousCities = [
        "New York",
        "Paris",
        "London",
        "Tokyo",
        "Rome",
        "Sydney",
        "Istanbul",
        "Dubai",
        "Barcelona",
        "Berlin",
        "Los Angeles",
        "Beijing",
        "Moscow",
        "Rio de Janeiro",
        "Cape Town",
        "Bangkok",
        "Toronto",
        "Mumbai",
        "Cairo",
        "Seoul",
        "Amsterdam",
        "Athens",
        "Dublin",
        "Hong Kong",
        "Singapore",
        "San Francisco",
        "Prague",
        "Vienna",
        "Mexico City",
        "Buenos Aires",
        "Stockholm",
        "Copenhagen",
        "Helsinki",
        "Oslo",
        "Warsaw",
        "Budapest",
        "Zurich",
        "Geneva",
        "Madrid",
        "Lisbon",
        "Brussels",
        "Brasília",
        "Hanoi",
        "Wellington",
        "Vancouver",
        "Dublin",
        "Edinburgh",
        "Auckland",
        "Cape Town",
        "Johannesburg",
        "Copenhagen",
        "Lisbon",
        "Vienna",
        "Stockholm",
        "Prague",
        "Budapest",
        "Warsaw",
        "Berlin",
        "Amsterdam",
        "Barcelona",
        "Milan",
        "Rome",
        "Paris",
        "London",
        "New York",
        "Los Angeles",
        "Chicago",
        "Toronto",
        "Sydney",
        "Melbourne",
        "Tokyo",
        "Beijing",
        "Shanghai",
        "Hong Kong",
        "Seoul",
        "Mumbai",
        "Bangkok",
        "Istanbul",
        "Dubai",
        "Cairo",
        "Cape Town",
        "Rio de Janeiro",
        "Buenos Aires",
        "Mexico City",
        "Moscow",
        "St. Petersburg",
        "Berlin",
        "Munich",
        "Hamburg",
        "Frankfurt",
        "Barcelona",
        "Madrid",
        "Valencia",
        "Seville",
        "Athens",
        "Thessaloniki",
        "Budapest",
        "Debrecen",
        "Szeged",
        "Warsaw",
        "Krakow",
        "Lodz",
        "Wroclaw",
      ];
      

      const getAndReset = () => {
        setCity(getCity)
        setGetCity("")
      }


    return (
        <div>
            <div>
                <input className="input" type="text" value={getCity} onChange={(e) => setGetCity(e.target.value)} />
                <button className='button' onClick={getAndReset}>Get</button>
            </div>

            <div className='dropdown-container'>
                <select className='' value={city} onChange={(e) => setCity(e.target.value)}>
                    {
                        famousCities.map((city, index) => {
                            return <option key={index} value={city}>{city}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default Dropdown 