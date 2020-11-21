import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './menu.css';
import { connect } from 'react-redux';
import { selectedOption } from '../../actions';
import sections from '../../utils/sections';

const Menu = () => {
  const [itemsVisibility, setItemsVisibility] = useState(false);

  useEffect(() => {
    const onBodyClick = () => {
      setItemsVisibility(false);
    };

    if (!itemsVisibility) return;

    document.body.addEventListener('click', onBodyClick);

    return () => document.body.removeEventListener('click', onBodyClick);
  }, [itemsVisibility]);

  const renderMenuItems = sections.map(section => (
    <Link
      to={section.path}
      className="item"
      onClick={() => {
        setItemsVisibility(false);
      }}
      key={section.header}>
      {section.header}
    </Link>
  ));

  return (
    <div className="menu-wrapper">
      <i
        className="bars icon"
        onClick={() => setItemsVisibility(!itemsVisibility)}></i>
      <div className={`menu-items ${itemsVisibility ? 'visible' : ''}`}>
        {renderMenuItems}
      </div>
    </div>
  );
};

export default connect(null, {
  resetOption: selectedOption,
})(Menu);
