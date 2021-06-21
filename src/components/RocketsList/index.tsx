import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button';

const RocketsList: React.FC = () => {
  const { fetchRockets } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.rockets);
  console.log(data);

  const handleClick = () => {
    fetchRockets();
  };

  const canRender = !error && !loading;

  return (
    <>
      <Button onClick={handleClick} label="Rockets" />
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {canRender &&
        data.map((element) => (
          <div
            style={{ border: '1px dotted black', padding: 10, marginBottom: 5 }}
            key={element}
          >
            {element}
          </div>
        ))}
    </>
  );
};

export default RocketsList;
