interface LinkProps {
  text: string;
  classNameLink: string;
  classNameContainer: string;
}

const Link = (props: LinkProps) => {
  const { text, classNameContainer, classNameLink } = props;
  return (
    <li className={classNameContainer}>
      <a href="#" className={classNameLink}>
        {text}
      </a>
    </li>
  );
};

export default Link;
