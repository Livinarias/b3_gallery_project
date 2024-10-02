import { Link } from 'react-router-dom';
import { Image1 } from './Image1';
import { Image2 } from './Image2';
import { Image3 } from './Image3';
import { Image4 } from './Image4';
import { Image5 } from './Image5';


export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/image1' className='links'>
        <figure className='thumbnail-image-size'>
          <Image1 />
          <figcaption>Paisaje 1</figcaption>
        </figure>
      </Link>
      <Link to='/image2' className='links'>
        <figure className='thumbnail-image-size'>
          <Image2 />
          <figcaption>Paisaje 2</figcaption>
        </figure>
      </Link>
      <Link to='/image3' className='links'>
        <figure className='thumbnail-image-size'>
          <Image3 />
          <figcaption>Paisaje 3</figcaption>
        </figure>
      </Link>
      <Link to='/image4' className='links'>
        <figure className='thumbnail-image-size'>
          <Image4 />
          <figcaption>Paisaje 4</figcaption>
        </figure>
      </Link>
      <Link to='/image5' className='links'>
        <figure className='thumbnail-image-size'>
          <Image5 />
          <figcaption>Paisaje 5</figcaption>
        </figure>
      </Link>
    </div>
  )
}
