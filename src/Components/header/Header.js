import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import Menu from '../Menu/Menu';
import speechSynthesis from '../../utils/speechSynthesis';

const Header = ({ streak, location, history }) => {
  const renderHeaderText = () => {
    switch (location.pathname) {
      case '/':
        return 'Welcome Beulah!';
      case '/learn/numbers':
        return 'Know your numbers';
      case '/learn/nigeria/notes':
        return 'Get familiar with Nigeria Notes';
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
      <div className="header-text" style={{ textAlign: 'center' }}>
        {renderHeaderText()}
      </div>
      <i
        className="home icon"
        style={{ marginLeft: 'auto', fontSize: '1.2rem' }}
        onClick={() => history.push(`/`)}></i>
      <Menu />
    </div>
  );
};

const mapStateToProps = state => {
  return { streak: state.streak };
};

const rendered = connect(mapStateToProps)(Header);

export default withRouter(rendered);
