import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import Menu from '../Menu/Menu';
import speechSynthesis from '../../utils/speechSynthesis';

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
      <div
        className="streak"
        onClick={() => {
          speechSynthesis.speak(
            `You on a streak of ${streak}, ${10 - streak} more to see a video`
          );
        }}>
        {streak}
      </div>
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
