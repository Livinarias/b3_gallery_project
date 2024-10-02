import image from '../assets/img/image_1.jpg';
import PropTypes from 'prop-types';

export const Image1 = ( { className } ) => {
  return (
    <img src={image} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Image1.propTypes = {
  className: PropTypes.string
}