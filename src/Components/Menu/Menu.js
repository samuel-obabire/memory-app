import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './menu.css';
import { connect } from 'react-redux';
import { selectedOption } from '../../actions';

const options = [
  { label: 'Numbers', path: '/' },
  { label: 'Currencies', path: '/learn/nigeria/notes' },
  { label: 'Arithemetics', path: '/' },
];

const Menu = ({ resetOption }) => {
  const [itemsVisibility, setItemsVisibility] = useState(false);

  useEffect(() => {
    const onBodyClick = () => {
      setItemsVisibility(false);
    };

    if (!itemsVisibility) return;

    document.body.addEventListener('click', onBodyClick);

    return () => document.body.removeEventListener('click', onBodyClick);
  }, [itemsVisibility]);

  const renderMenuItems = options.map(option => (
    <Link
      to={option.path}
      className="item"
      onClick={() => {
        // resetOption();
        setItemsVisibility(false);
      }}
      key={option.label}>
      {option.label}
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
