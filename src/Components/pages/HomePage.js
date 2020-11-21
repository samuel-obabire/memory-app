import { Link } from 'react-router-dom';

const HomePage = ({ sections }) => {
  const renderSections = () => {
    return sections.map(({ header, description, path }) => {
      return (
        <Link to={path} className="item" key={header}>
          <i class="large github middle aligned icon"></i>
          <div className="content">
            <div
              style={{
                padding: ' 0.5rem 1rem',
                color: 'rgba(255, 255, 255, 0.877)',
              }}
              className="header">
              {header}
            </div>
            <div className="description">{description}</div>
          </div>
        </Link>
      );
    });
  };
  return (
    <div
      className="ui relaxed divided list"
      style={{
        gridColumnEnd: 'span 3',
        padding: '1rem',
        margin: '0',
      }}>
      <span style={{ fontWeight: 'bold' }}>What do you want to learn?</span>
      {renderSections()}
    </div>
  );
};

export default HomePage;
