import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
         <div className=' bg-base-300 py-5'>
            
            <footer className="w-11/12 mx-auto flex flex-col md:flex-row justify-between footer-horizontal text-base-content rounded px-10 py-15 space-y-6 ">
                <aside>
                  <div className='font-extrabold text-3xl py-7' ><span className='text-[#9B5DE0] hover:underline'>A</span><span className='text-pink-600 hover:underline'>r</span><span className='text-green-600 hover:underline'>t</span><span className='text-yellow-500 hover:underline'>i</span><span className='text-blue-500 hover:underline'>f</span><span className='text-cyan-500 hover:underline'>y</span></div>
  </aside> 
  <div className=" gap-4">
       <h6 className="footer-title">Company</h6>
    <p>About us</p>
    <p>Contact</p>
    <p>Press kit</p>
    <p>Jobs</p>
  </div>
 
  <div>
    <h6 className="footer-title">Legal</h6>
    <p>Terms of use</p>
    <p>Privacy policy</p>
    <p>Cookie policy</p>
  </div>
  <div>
    <h6 className="footer-title">Social Links</h6>
    
    <div className='flex items-center mt-5 gap-4 '>
<Link to="https://x.com/" className='cursor-pointer hover:text-pink-400 w-5 '><FaXTwitter /></Link> 
<Link to="https://www.instagram.com/" className='cursor-pointer hover:text-pink-400'><FaInstagram /></Link> 
<Link to="https://web.facebook.com/" className='cursor-pointer hover:text-blue-400'><FaFacebookF /></Link> 
<Link to="/https://github.com/" className='cursor-pointer hover:text-pink-400'><FaGithub /></Link> 

    </div>
  </div>
  
</footer>
<aside className='text-center'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>
  </aside>
        </div>
    );
};

export default Footer;