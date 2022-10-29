import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Cards from '../utils/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const Contents = () => {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(0);
    const API_URL = 'https://api.spacexdata.com/v4/launches/';
    const fetchData = async() => {
        await axios.get(`${API_URL}?&maxResults=10`)
                    .then(response => {
                        setData(response.data);
                        setPages(response.data.length);
                    })       
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getMoreData = () => {
        // setTimeout(() => {
        //     fetchData();
        // }, 1000);
    }

    const hasMoreData = () => {

    }

  return (
    <div className='container flex flex-col mx-auto min-h-screen bg-white border border-gray-400 rounded px-2 pt-5'>
        <div>
            <InfiniteScroll dataLength={data.length - 20}
                            next={getMoreData}
                            hasMore={hasMoreData}>
                {
                    data.map(items => {
                        return(
                            <Cards image={items.links.patch.small} 
                                flightNumber={items.flight_number} 
                                missionName={items.name}
                                yearLaunch={items.date_utc}
                                details={items.details} />
                        )
                    })
                }
            </InfiniteScroll>
        </div>
    </div>
  )
}

export default Contents