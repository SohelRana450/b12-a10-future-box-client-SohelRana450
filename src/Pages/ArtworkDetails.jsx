import React, { useEffect, useState } from 'react';
import {  useParams} from 'react-router';

const ArtworkDetails = () => {
    const {id} = useParams()
    const [count,setcount] = useState({})
    const [refetch,setRefetch] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:3000/addArtwork/${id}`)
        .then(res => res.json())
        .then(data =>{
            setcount(data)
        })
    },[id,refetch])

    const handleLikeButton =()=>{
        const final = {
            likes: count.likes,
        };
        fetch(`http://localhost:3000/likes/${count._id}`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(final)
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
            setRefetch(!refetch)
            
        })  
        
    }

    return (
        <div className='w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
           <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
             <div>
                
                <img className='w-170 md:h-90 rounded-xl ' src={count.ImageURL} alt="" />
               <div className=' mt-15 space-x-5 pl-15'>
                 <button onClick={handleLikeButton} className='btn btn-secondary px-6'>Like </button>
                 <span>{count.likes}</span>
            <button className='btn btn-primary px-10'>Favorites</button>
               </div>
            
             </div>
            <div className='w-80 h-full card p-3 bg-base-300 items-center '>
                <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
                <img className='w-56 h-56 rounded-full object-center' src={count.artistPhoto} alt="" />
                <div className=' p-2 rounded-xl mt-3'>
                    <h1 className='font-semibold'>Name : <span className='font-medium'>{count.name}</span></h1>
                <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{count.totalArtworks}</span></p>
                </div>
            </div>
            </div>
            
            <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
                <h1 className='font-bold text-pink-400 text-2xl'>{count.title}</h1>
                <p className=''>Artist: {count.artistname}</p>
                <p>Medium: {count.tools}</p>
                <p>{count.description}</p>
           </div>
        </div>
    );
};

export default ArtworkDetails;
