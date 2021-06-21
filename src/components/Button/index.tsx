interface IProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: IProps) => {
  return (
    <button style={styles.buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

const styles = {
  buttonStyle: {
    marginBottom: 15,
    border: '1px solid black',
    color: 'black',
    padding: 12,
  },
};

export default Button;
