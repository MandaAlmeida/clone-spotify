import Play from "../assets/play.svg";

interface CardProps {
  src: string;
  alt: string;
  span: string;
  strong: string;
}

const Card = (props: CardProps) => {
  const { src, alt, span, strong } = props;
  return (
    <li className="main-card-list">
      <a href="#" className="main-card active">
        <section className="main-card-section-img">
          <img className="main-card-img" src={src} alt={alt} />
          <button
            aria-label="botão que inicia a musica"
            className="main-card-play active"
          >
            <img src={Play} alt="" />
          </button>
        </section>
        <section className="main-card-section-text">
          <strong className="main-card-title">{strong}</strong>
          <span className="main-card-text">{span}</span>
        </section>
      </a>
    </li>
  );
};

export default Card;
