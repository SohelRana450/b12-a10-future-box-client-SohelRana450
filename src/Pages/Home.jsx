// import React, { use } from 'react';
// import ArtWorkSection from '../components/ArtWorkSection';
// import Artist from '../components/Artist';
// import { FaUserAlt } from 'react-icons/fa';
// import Highlights from '../components/Highlights';
// import Banner from '../components/Banner';
// import { Fade } from 'react-awesome-reveal';
// import { Typewriter } from 'react-simple-typewriter';
// import { AuthContext } from '../Provider/AuthContext';
// import { useLoaderData } from 'react-router';

// const latestData =  fetch('/artist.json').then(res => res.json())

// const Home = () => {
//     const {loading} = use(AuthContext)
//     const loaddata = use(latestData)
//     const latest = useLoaderData()
    

//     if(loading){
//   return (
//             <div className='flex justify-center items-center mt-50'>
//                 <span className='loading loading-bars loading-xl'></span>
//             </div>
//         )
// }
//     return (
//         <div>
//             <Banner></Banner>
//             <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//            {
//             latest.map(promise => <ArtWorkSection key={promise._id} promise={promise}></ArtWorkSection>)
//            }
//         </div>
//         <div className='w-11/12 mx-auto py-10  my-15 bg-[#f3f4fc] rounded-lg dark:text-black'>
// <Fade direction="left" triggerOnce>
//         <h1 className='text-2xl md:text-4xl font-bold text-center mx-auto pb-10 md:py-15 flex justify-center  gap-2 '><FaUserAlt className='text-[#d319a4] text-center ml-5 mt-1 md:mt-0' /> {" "}
//                     <span className="text-[#059ca1]">
//                       <Typewriter
//                         words={["Top Artists of the Week"]}
//                         loop={true}
//                         cursor
//                         cursorStyle="|"
//                         typeSpeed={100}
//                         deleteSpeed={70}
//                         delaySpeed={1500}
//                       />
//                     </span>
//                   </h1>
//                 </Fade>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 md:px-10'>
//              {
//             loaddata.map(art => <Artist key={art.id} art={art}/>)
//          }
           
//         </div>
//         </div>
//         <Highlights></Highlights>
//         </div>
//     );
// };

// export default Home;
import React, { use,  useEffect, useState } from 'react';
import ArtWorkSection from '../components/ArtWorkSection';
import Artist from '../components/Artist';
import { FaUserAlt } from 'react-icons/fa';
import Highlights from '../components/Highlights';
import Banner from '../components/Banner';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from '../Provider/AuthContext';
const jsonData = fetch('/artist.json').then(res => res.json())
const Home = () => {
  const { loading } = use(AuthContext);
  const latest = use(jsonData); 
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    
     fetch('https://b12-a10-future-box-server-sohelrana.vercel.app/latest-addArtwork')
      .then((res) => res.json())
      .then((data) => setArtists(data))
      
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center mt-50'>
        <span className='loading loading-bars loading-xl'></span>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Latest Artworks */}
      <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
        (artists.map((artwork) =><ArtWorkSection key={artwork._id} promise={artwork} />
        ))
        }
      </div>

      {/* Top Artists */}
      <div className='w-11/12 mx-auto py-10 my-15 bg-[#f3f4fc] rounded-lg dark:text-black'>
        <Fade direction='left' triggerOnce>
          <h1 className='text-2xl md:text-4xl font-bold text-center mx-auto pb-10 md:py-15 flex justify-center gap-2'>
            <FaUserAlt className='text-[#d319a4] text-center ml-5 mt-1 md:mt-0' />{' '}
            <span className='text-[#059ca1]'>
              <Typewriter
                words={['Top Artists of the Week']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </Fade>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 md:px-10'>
          {latest.map((art) => (
            <Artist key={art.id} art={art} />
          ))}
        </div>
      </div>

      {/* Community Highlights */}
      <Highlights />
    </div>
  );
};

export default Home;
