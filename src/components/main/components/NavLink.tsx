import Link from "../../link/link";
interface NavLinkMainProps {
  title: string;
}

const NavLinkMain = (props: NavLinkMainProps) => {
  const { title } = props;
  return (
    <ul className="main-nav-container">
      <Link
        text={title}
        classNameContainer="main-nav-link-container"
        classNameLink="main-nav-link"
      />
      <Link
        text="Mostrar tudo"
        classNameContainer="main-nav-link-container"
        classNameLink="main-nav-link text"
      />
    </ul>
  );
};

export default NavLinkMain;
