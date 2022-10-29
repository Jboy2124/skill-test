import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Cards from '../utils/Cards'

const Contents = () => {
    const [data, setData] = useState([]);

    const fetchData = async() => {
        await axios.get('https://api.spacexdata.com/v4/launches/')
                    .then(response => {
                        setData(response.data);
                    })
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='container flex flex-col mx-auto min-h-screen bg-white border border-gray-400 rounded px-2 pt-5'>
        <div>
            {
                data.map(items => {
                    return(
                        <Cards image={items.links.patch.small} 
                               flightNumber={items.flight_number} 
                               missionName={items.name}
                               details={items.details} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Contents