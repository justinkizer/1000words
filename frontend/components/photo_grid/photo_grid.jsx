import React from 'react';
import { Link } from 'react-router';

const PhotoGrid = (props) => {

  let photos;
  if (props.photos) {
    photos = props.photos.map(photo => <Link key={photo.id}><img className="grid-image" src={photo.img_url} data-aos="fade-up"/></Link>);
  }

  return (
    <div className="photo-grid">
      {photos}
    </div>
  );
};

export default PhotoGrid;
