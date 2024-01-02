
import Card from 'react-bootstrap/Card';

// Card Format that will be used for each player

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="img" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

Player.defaultProps = {
  name: 'Default Name',
  team: 'Default Team',
  nationality: 'Default Nationality',
  jerseyNumber: 99,
  age: 18,
  imageURL: 'https://example.com/default.jpg',
};


export default Player;
