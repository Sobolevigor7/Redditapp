import {useEffect, useState} from "react";
import axios from "axios";
import { useSelector} from "react-redux";
import {RootState} from "../store/reducer";

interface IPostsData {
    data?: Array<any>;
}

export function usePostsData() {
    const [data, setData] = useState<IPostsData>({});
    const token = useSelector<RootState>(state => state.token)
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best',{
                headers: {Authorization: `bearer ${token}`}
            }).then((resp) => {
                   const result = resp.data;
                   if (result.data) {
                       setData( {data: result.data});
                   }
        }).catch(console.log);
    }, [token] )
    return [data]
}
