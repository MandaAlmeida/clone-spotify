interface ButtonProps {
  classNameButton: string;
  classNameText: string;
  text?: string;
}

function Button(props: ButtonProps) {
  const { classNameButton, classNameText, text } = props;

  return (
    <button aria-label="button-header" className={classNameButton}>
      <span className={classNameText}>{text}</span>
    </button>
  );
}

export default Button;
