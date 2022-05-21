import { useEffect,useState } from 'react';
import {HookBlog} from '@type/index';

const useBlog = (API:string) => {
    const [news,setNews] = useState<HookBlog>() ;

    
    useEffect(() => {
        const FetchData = async () => {
            await fetch(API)
            .then(response => response.json())
            .then(data => setNews(data.results));
        };
        FetchData();
    },[API]);


    return news;
};


export {useBlog};