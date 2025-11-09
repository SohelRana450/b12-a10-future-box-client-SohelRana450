import React from 'react';
import MyLink from './MyLink';
import { Link } from 'react-router';

const Navbar = () => {
    return (
       <div className='bg-fuchsia-200 text-black'>
        <div className="w-11/12 mx-auto flex justify-between items-center py-2">
  <div className="flex items-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-[#B6AE9F] text-[#062941] font-bold rounded-box z-1 mt-3 w-52 p-2 ">
    <li><MyLink to="/">Home</MyLink></li>           
    <li><MyLink to="/explore-artworks">Explore Artworks</MyLink></li>
    <li><MyLink to="/add-artwork">Add Artwork</MyLink></li>
    <li><MyLink to="/my-gallery">My
     Gallery</MyLink></li>
   <li><MyLink to="/my-favorites">My Favorites</MyLink></li>
      </ul>
    </div>
   <div className='font-extrabold text-3xl ' ><span className='text-[#9B5DE0] hover:underline'>A</span><span className='text-pink-600 hover:underline'>r</span><span className='text-green-600 hover:underline'>t</span><span className='text-yellow-500 hover:underline'>i</span><span className='text-blue-500 hover:underline'>f</span><span className='text-cyan-500 hover:underline'>y</span></div>
  </div>
  <div className='flex items-center gap-5'>
    <div className=" hidden lg:flex">
    <ul className="flex gap-4 px-1 text-sm">
         <li><MyLink to="/">Home</MyLink></li>           
    <li><MyLink to="/explore-artworks">Explore Artworks</MyLink></li>
    <li><MyLink to="/add-artwork">Add Artwork</MyLink></li>
    <li><MyLink to="/my-gallery">My
     Gallery</MyLink></li>
   <li><MyLink to="/my-favorites">My Favorites</MyLink></li>
    </ul>
  </div>
  <div className="space-x-3 flex items-center">
    
   <Link to="/auth/login" className='btn btn-secondary rounded-xl font-bold '>Log In</Link>
  
    
    <Link to="/auth/register" className='btn btn-secondary rounded-xl font-bold '>Register</Link>
  </div>
  </div>
</div>
       </div>
    );
};

export default Navbar;