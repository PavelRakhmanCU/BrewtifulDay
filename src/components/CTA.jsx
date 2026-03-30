import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="cta">
      <Link to="/menu">
        <button>Order Now</button>
      </Link>
    </div>
  );
};

export default CTA; 