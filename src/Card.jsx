
import PropTypes from 'prop-types';
const Card = ({ title, icon, children }) => {
    return (
      <div className='card'>
        <section className='card-title'>
          <img src={icon} className='icon' />
          <h1 className=''>{title}</h1>
        </section>
        {children}
      </div>
    );
  };

  Card.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
  }

  export default Card