import React from 'react';
import {useHistory} from 'react-router-dom';

import header from './Header.module.scss'
import '../global.scss'

const Header = () => {

  const history = useHistory();

  const goBackToHomePage = () => {
    history.push('/');
  };

  return (
    <div className={header.header}>
      <div className={header.logo + " wrapper"} onClick={goBackToHomePage}>
        <span>Crypto</span><span>Convert</span>
      </div>
    </div>
  )
};

export default Header;