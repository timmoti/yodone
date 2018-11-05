import React from 'react';
import Icon from '../../Icon';
import { ICONS } from '../../constants';

const Logo = () => {
  return (
    <h1 className="title">
      <a href="/today">
        <Icon icon={ICONS.LOGO} size={16} color={'#1fcc92'} />
        <span>Yodone</span>
      </a>
    </h1>
  );
};

export default Logo;
