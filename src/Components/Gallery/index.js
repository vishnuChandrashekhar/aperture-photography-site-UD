import './index.css';
import GalleryData from './galleryData.js';
import { useState } from 'react';

const Gallery = () => {

  const [items, setItems] = useState(GalleryData);

  const filtterItem = (argument) => {
    const updatedItem = GalleryData.filter((currentElemnet)=>{
      return currentElemnet.category === argument;
    })
    setItems(updatedItem);
  }
  return (
    <>
    <div className="gallery-container" id='gallery'>
      <h1>OUR WORK</h1>
      <hr />
      <div className="menu">
        <h4 onClick={()=>setItems(GalleryData)}>ALL</h4>
        <h4 onClick={()=> filtterItem('nature')}>NATURE</h4>
        <h4 onClick={()=> filtterItem('wedding')}>WEDDING</h4>
        <h4 onClick={()=> filtterItem('landscape')}>LANDSCAPE</h4>
        <h4 className='drop-responsive'onClick={()=> filtterItem('portrait')}>PORTRAITS</h4>
      </div>
      <div className="image-container">
          {
            items.map((element)=>{
              const {id, image, category, name} = element;

              return(
                <div>
                  <a href={image}><img src={image} alt="portfolio-gallery-images" className='img-card'/></a>
                </div>
              )
            })
          }
      </div>
    </div>
    </>
  )
}

export default Gallery 