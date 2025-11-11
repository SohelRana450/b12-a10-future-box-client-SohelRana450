import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import ArtWorkSection from '../components/ArtWorkSection';
import UpdateGallery from '../components/UpdateGallery';

const MyGallery = () => {
    const {user} = use(AuthContext)
    const [gallery,setGallery] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/my-gallery?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setGallery(data)
        })
    },[user])
    return (
        <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
           {
            gallery.map(promise => <UpdateGallery key={promise._id} promise={promise}></UpdateGallery>)
           }
        </div>
    );
};

export default MyGallery;