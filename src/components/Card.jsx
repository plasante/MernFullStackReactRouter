import React, {useEffect} from 'react';

const Card = (props) => {

  const [user, setUser] = React.useState('');

  useEffect(() => {
    setUser(props.match.params.user);
  }, []);

  return (
    <div>
      <div
        className={'ui raised very padded text container segment'}
        style={{marginTop: '80px'}}
      >
        <h3 className={'ui header'}>{user}</h3>
      </div>
    </div>
  );
};

export default Card;