import { useLoaderData } from 'react-router-dom';
function Github() {
    const data= useLoaderData();
    // const [data,setData] = useState([]);

    // useEffect (()=>{
    //     fetch("http://api.github.com/users/rana-saboorr")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
        
    </div>
  )
}

export default Github;
// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async  () => {
    const response = await fetch("http://api.github.com/users/rana-saboorr");
    return response.json();
}
