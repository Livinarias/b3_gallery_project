import image from '../assets/img/image_5.jpg';
import PropTypes from 'prop-types';

export const Image5 = ( { className } ) => {
  return (
    <img src={image} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Image5.propTypes = {
  className: PropTypes.string
}