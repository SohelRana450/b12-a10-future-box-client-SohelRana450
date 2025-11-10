import React from 'react';

const ArtDetails = ({data}) => {
    return (
        <div>
            <div>
                <img src={data.ImageURL} alt="" />
            </div>
        </div>
    );
};

export default ArtDetails;