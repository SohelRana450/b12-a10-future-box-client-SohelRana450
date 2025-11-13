import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import UpdateGallery from '../components/UpdateGallery';
import FavoriteDetails from '../components/FavoriteDetails';

const MyFavorites = () => {
   const {user} = use(AuthContext)
       const [gallery,setGallery] = useState([])
   
       useEffect(()=>{
        if(!user){
            return
        }
           fetch(`https://b12-a10-future-box-server-sohelrana.vercel.app/my-favoriteArt?email=${user.email}`,{
            headers: {
                authorization : `Bearer ${user.accessToken}`
            }
           })
           .then(res => res.json())
           .then(data => {
               setGallery(data)
           })
       },[user])

      const handleRemoveFromGallery = (id) => {
    setGallery(prev => prev.filter(item => item._id !== id));
  };
       

       return (
           <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
              {
               gallery.map(promise => <FavoriteDetails key={promise._id} promise={promise} 
                onDeleted={handleRemoveFromGallery}
                 ></FavoriteDetails>)
              }
           </div>
       );
};

export default MyFavorites;