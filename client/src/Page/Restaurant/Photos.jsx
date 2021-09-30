import React, {useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';

import PhotosCollection from '../../Components/Restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/reviews_photos/afa/e30ee741f94f2377f6a36e2e6bc32afa_1557119967.jpg?",
        "https://b.zmtcdn.com/data/pictures/chains/7/32337/c9c8fc75391a9879d20a6f9972bca1ae.jpg?",
        "https://b.zmtcdn.com/data/reviews_photos/a98/b55646e6cdf253905fac90992fd58a98_1514471193.jpg?",
        "https://b.zmtcdn.com/data/reviews_photos/41d/27da36878ef6e25dce6802f9439b441d_1551548735.jpg?"
    ]);
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const [CurrentImg, setCurrentImg] =useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);  

    return (
        <>
        
        {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={ CurrentImg }
          disableScroll={ false }
          onClose={ closeViewer }
        />
      )}          

      <div className="flex flex-wrap gap-2">
      {
                photos.map((photo) => (
                    <PhotosCollection
                    image={photo}
                    openViewer={openViewer}
                    />
                ))
      }
      </div>      
           
        </>
    )
}

export default Photos;
