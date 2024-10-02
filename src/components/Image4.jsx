import image from '../assets/img/image_4.jpg';
import PropTypes from 'prop-types';

export const Image4 = ( { className } ) => {
  return (
    <img src={image} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Image4.propTypes = {
  className: PropTypes.string
}