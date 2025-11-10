import React from 'react';
import { Link } from 'react-router';


const ArtWorkSection = ({promise}) => {
    const {_id} = promise;
    return (
        <div className="card bg-[#697e79] shadow-sm">
  <figure className="p-3">
    <img
      src={promise.ImageURL}
      alt="Shoes"
      className="rounded-xl w-full h-60" />
  </figure>
  <div className="card-body pt-2">
    <h2 className="card-title">{promise.title}</h2>
    <div className="">
      <Link to={`/artwork-details/${_id}`} className="btn border-pink-500">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default ArtWorkSection;