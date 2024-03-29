import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Favorite, Settings } from '@mui/icons-material';
import '../../style/cssP2.css';

export default function FooterP2() {

  return (
    <div className="Footer">
      <Link to="/components/Home">
        <div className="icon" >
          <Home fontSize="small" color="primary" />
        </div>
      </Link>
      <Link to="/components/Page2Components/HomeP2">     
        <div className="icon">
          <Search fontSize="small" color="action" />
        </div>
    </Link>
     
      <Link to="/favorite">
        <div className="icon">
          <Favorite fontSize="small" color="error" />
        </div>
      </Link>
      <Link to="/settings">
        <div className="icon">
          <Settings fontSize="small" color="disabled" />
        </div>
      </Link>
    </div>
  );
}
