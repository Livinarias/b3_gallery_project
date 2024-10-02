import image from '../assets/img/image_3.jpg';
import PropTypes from 'prop-types';

export const Image3 = ( { className } ) => {
  return (
    <img src={image} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Image3.propTypes = {
  className: PropTypes.string
}