import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import Menu from '../Menu/Menu';

const Header = ({ streak, location }) => {
  const renderHeaderText = () => {
    switch (location.pathname) {
      case '/':
        return 'Learn Numbers';
      case '/learn/nigeria/notes':
        return 'Get Familiar with Nigeria Notes';
      default:
        return 'Learn';
    }
  };

  return (
    <div className="header">
      <div className="streak">{streak}</div>
      <div className="header-text">{renderHeaderText()}</div>
      <Menu />
    </div>
  );
};

const mapStateToProps = state => {
  return { streak: state.streak };
};

const rendered = connect(mapStateToProps)(Header);

export default withRouter(rendered);
