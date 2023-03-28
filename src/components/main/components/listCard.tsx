import { ReactNode } from "react";
import NavLinkMain from "./NavLink";

interface ListCardProps {
  children: ReactNode;
}

const ListCard = (props: ListCardProps) => {
  const { children } = props;
  return (
    <section>
      <ul className="main-list-card">{children}</ul>
    </section>
  );
};

export default ListCard;
