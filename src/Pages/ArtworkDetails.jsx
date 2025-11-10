import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const ArtworkDetails = () => {
    const {user} = use(AuthContext)
    const data = useLoaderData()
    console.log(data);
    return (
        <div className=''>
           <div className='w-11/12 mx-auto py-10 flex flex-col md:flex-row justify-between gap-5'>
             
                <img className='w-170 md:h-90 rounded-xl ' src={data.ImageURL} alt="" />
            
            <div>
                <h1>{user.displayName}</h1>
                <img src={user.photoURL} alt="" />
            </div>
            </div>
            <div className='bg-gray-500  p-5 rounded-xl space-y-3'>
                <h1 className='font-bold text-pink-400 text-2xl'>{data.title}</h1>
                <p className=''>Artist: {data.artistname}</p>
                <p>Medium: {data.tools}</p>
                <p>{data.description}</p>
           </div>
        </div>
    );
};

export default ArtworkDetails;