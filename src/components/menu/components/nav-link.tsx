interface NavLinkProps {
  src: string;
  alt: string;
  text: string;
  className: string;
}

function NavLink(props: NavLinkProps) {
  const { src, alt, text, className } = props;
  return (
    <li className="nav-link">
      <a href="/" className="nav-link-container">
        <div className={className}>
          <img className="nav-link-img" alt={alt} src={src} />
        </div>
        <strong className="nav-link-text">{text}</strong>
      </a>
    </li>
  );
}

export default NavLink;
