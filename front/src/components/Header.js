import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className='nav-btns-container'>
        <button type="button" className="nav-btn" onClick={ () => navigate('/') }>
          <div className="nav-item">
            <h5 className="nav-link" aria-current="page">Home</h5>
          </div>
        </button>
        <button type="button" className="nav-btn" onClick={ () => navigate('/products') }>
          <div className="nav-item">
            <h5 className="nav-link">Products</h5>
          </div>
        </button>
        <button type="button" className="nav-btn" onClick={ () => navigate('/feedstock') }>
          <div className="nav-item">
            <h5 className="nav-link">RawMaterials</h5>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
