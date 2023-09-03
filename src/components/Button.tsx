interface props {
  buttonName: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ buttonName, onClick, color = "secondary" }: props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn  m-4 btn-" + color}
        onClick={onClick}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
