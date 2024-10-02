import image from '../assets/img/image_2.jpg';
import PropTypes from 'prop-types';

export const Image2 = ( { className } ) => {
  return (
    <img src={image} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Image2.propTypes = {
  className: PropTypes.string
}