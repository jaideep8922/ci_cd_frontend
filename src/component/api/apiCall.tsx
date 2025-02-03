import { setPosts } from '@/redux/apiSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useFetchData = () => {
    const dispatch = useDispatch()


const [post, setPost] = useState([])

useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch(setPosts(response.data)); // Dispatch data to Redux
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, [dispatch]);

  
// useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response=> {
//         setPost(response.data)
//         dispatch(setPosts(response.data))
//         console.log("Fetched posts:", response.data); // Log the fetched data immediately after it is received
//     })
//     .catch(error=> {
//         console.log("error", error)
//     })
// },[])
// return { post };
}