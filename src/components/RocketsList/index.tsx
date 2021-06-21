import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RocketsList: React.FC = () => {
  const { fetchRockets } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.rockets);
  console.log(data);

  const handleClick = () => {
    fetchRockets();
  };

  return (
    <>
      <button onClick={handleClick}>ROCKETS</button>
      {}
    </>
  );
};

export default RocketsList;
