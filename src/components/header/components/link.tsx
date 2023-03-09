interface LinkProps {
  text: string;
}

function Link(props: LinkProps) {
  const { text } = props;
  return (
    <li className="header-list-link">
      <a href="#" className="header-link">
        {text}
      </a>
    </li>
  );
}

export default Link;
