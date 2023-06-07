import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function Stars(props) {
  const [selected, setSelected] = useState(false);

  const handleStarClick = () => {
    setSelected(!selected);
    props.onSelect();
  };

  return (
    <FaStar
      className={selected ? 'star selected' : 'star'}
      onClick={handleStarClick}
    />
  );
}

export default Stars;
