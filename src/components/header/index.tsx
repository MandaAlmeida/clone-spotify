import Button from "./components/button";
import Link from "./components/link";
import "./styles.css";

function Header() {
  return (
    <div className="container-header">
      <header className="header">
        <div className="button-return">
          <Button
            classNameText="seta voltar"
            classNameButton="header-button-return"
          />
          <Button
            classNameText="seta avançar"
            classNameButton="header-button-return"
          />
        </div>
        <div className="container">
          <section>
            <ul className="header-list">
              <Link text="Premium" />
              <Link text="Suporte" />
              <Link text="Baixar" />
            </ul>
          </section>
          <section className="header-barra-divisão"></section>
          <section className="container">
            <Link text="Inscrever-se" />
            <Button
              classNameButton="button-login"
              classNameText="text-button-login"
              text="Entrar"
            />
          </section>
        </div>
      </header>
    </div>
  );
}

export default Header;
