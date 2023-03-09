interface ButtonProps {
  text?: string;
  src: string;
  alt: string;
}

function Button(props: ButtonProps) {
  const { text, src, alt } = props;

  return (
    <button aria-label="button-language" className="button-language">
      <img src={src} alt={alt} className="button-language-img" />
      {text}
    </button>
  );
}

export default Button;
