import React from 'react';
import { useLoaderData } from 'react-router';
import ArtWorkSection from '../components/ArtWorkSection';


const Home = () => {
    const data = useLoaderData()
    return (
        <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            data.map(promise => <ArtWorkSection key={promise._id} promise={promise}></ArtWorkSection>)
           }
        </div>
    );
};

export default Home;