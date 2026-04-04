import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className="cta">
      <button type="button" onClick={() => navigate("/register")}>
        Make a reservation
      </button>
    </div>
  );
};

export default CTA; 