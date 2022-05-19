import { useEffect,useState } from 'react';

const useBlog = (API) => {
    const [news,setNews] = useState([]);

    const FetchData = async () => {
        await fetch(API)
        .then(response => response.json())
        .then(data => setNews(data.results));
    }

    useEffect(() => {
        FetchData();
    },[API]);


    return news;
}


export {useBlog};