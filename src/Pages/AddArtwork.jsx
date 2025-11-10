import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const AddArtwork = () => {

    const {user} = use(AuthContext)
    const handleForm = (e) =>{
        e.preventDefault()
        const title = e.target.title.value;
        const name = e.target.name.value;
        const artistname = e.target.artistname.value;
        const email = e.target.email.value;
        const ImageURL = e.target.ImageURL.value;
        const price = e.target.price.value;
        const tools = e.target.tools.value;
        const visibility = e.target.visibility.value;
        const category = e.target.category.value;
        const dimensions = e.target.dimensions.value;
        const description = e.target.description.value;

        const artworkUser = {title,name,artistname,email,ImageURL,price,tools,visibility,category,dimensions,description}
        fetch('http://localhost:3000/addArtwork/',{
            method: 'POST',
            headers:{
                'content-type' : "application/json"
            },
            body: JSON.stringify(artworkUser)
        })
        .then(res => res.json())
        .then()
        toast.success('Successfully Artwork Add!')
        e.target.reset();
    }
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className="w-11/12 mx-auto py-10 bg-base-200 min-h-70">
  
    
          <form onSubmit={handleForm} className='space-y-3 w-full md:w-7/12 mx-auto bg-base-100 p-5 rounded-xl'>
           
           <div className='flex flex-col md:flex-row justify-between gap-3'>
            
            <div className='w-full mx-auto'>
                 <label className="label">Title</label>
          <input type="text" name="title" className="input block w-full" placeholder="Title" />
            </div>
            <div className='w-full mx-auto'>
                <label className="label">Artist Name</label>
          <input type="text"  name="artistname" className="input block w-full" placeholder="Artist Name" />
            </div>
           </div>
         <div className='flex flex-col md:flex-row gap-3 justify-between'>
            <div className='w-full mx-auto space-y-3'>
                 <label className="label">Name</label>
          <input type="text" readOnly defaultValue={user.displayName} name="name" className="input block w-full" placeholder="Name" />
            </div>
            <div className='w-full space-y-3'>
          <label className="label">Email</label>
          <input type="email" readOnly defaultValue={user.email} name="email" className="input block w-full" placeholder="Email" />
            </div>
         </div>
          <div className='flex flex-col md:flex-row gap-3 justify-between'>
            <div className='w-full space-y-3'>
                <label className="label">Image</label>
          <input type="text" name="ImageURL" className="input block w-full" placeholder="Image URL" />
            </div>
            
            <div className=' space-y-3'>
                <label className="label">Medium/Tools</label>
          <input type="text" name="tools" className="input block w-50" placeholder="Medium/Tools" />
            </div>
            
          </div>
          <label className="label">Photo</label>
          <input type="text" name="title"
          defaultValue={user.photoURL}
           className="input block w-full md:w-110" placeholder="Photo" />
         <div className='flex flex-col md:flex-row justify-around mt-2'>
             <div className='space-y-3 mt-2'>
                <label className="label ">Price (Optional)</label>
          <input type="text" name="price" className="input block w-50" placeholder="Price" />
             </div>
          <div className='space-y-3 mt-2'>
            <label className="label">Dimensions (Optional)</label>
          <input type="text" name="dimensions" className="input w-50 block" placeholder="Dimensions" />
          </div>
         </div>

          
<div className='flex flex-col md:flex-row justify-around mt-2'>
    <div className='space-y-2 mt-2'>
        <label className="label">Visibility</label>
          <select name='visibility' defaultValue="Pick a Option" className="select appearance-none w-50 block">
  <option>Public</option>
  <option>Private</option>
</select>
    </div>
    <div className='space-y-2 mt-2'>
        <label className="label">Category</label>
         <select name='category' defaultValue="Pick a Category" className="select appearance-none w-50 block">
  <option>Painting</option>
  <option>Drawing</option>
  <option>Digital</option>
</select>
    </div>
</div>
          <label className="label">Description</label>
          <textarea type="text" placeholder='Description...'
          name="description"
           className='textarea block w-full' id="" cols="80" rows="6"></textarea>
          
          <button type='submit' className="btn  mt-4 border-pink-500">Add To Artwork</button>
          </form>
        
    </div>
        </div>
 

    );
};

export default AddArtwork;