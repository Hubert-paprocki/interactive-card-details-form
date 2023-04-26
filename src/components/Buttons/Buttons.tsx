import "../../css/Main.scss";

interface ButtonProps {
  main?: boolean;
  type: "submit" | "button" | "reset";
  children: string;
  disabled?: boolean;
}

function Button({ main, type, children, disabled }: ButtonProps): JSX.Element {
  return (
    <button type={type} disabled={disabled} className={`${main && "main"}`}>
      {children}
    </button>
  );
}

export default Button;
