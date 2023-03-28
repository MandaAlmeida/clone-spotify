import "./styles.css";
import NavLinkMain from "./components/NavLink";
import ListCard from "./components/listCard";
import Card from "./components/card";
import card1 from "./assets/card1.jfif";
import card2 from "./assets/card2.jfif";
import card3 from "./assets/card3.jfif";
import card4 from "./assets/card4.jfif";
import card5 from "./assets/card5.jfif";

const Main = () => {
  return (
    <main className="main">
      <div className="main-container">
        <section>
          <NavLinkMain title="Foco" />
          <ListCard>
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
            <Card
              src={card2}
              alt="capa do audio Deep Focus"
              strong="Deep Focus"
              span="Keep calm and focus with ambient and post-rock music."
            />
            <Card
              src={card3}
              alt="capa do audio Instrumental Study"
              strong="Instrumental Study"
              span="Focus with soft study music in the background."
            />
            <Card
              src={card4}
              alt="capa do audio Jazz Vibes"
              strong="Jazz Vibes"
              span="The original chill instrumental beats playlist."
            />
            <Card
              src={card5}
              alt="capa do audio Focus Flow"
              strong="Focus Flow"
              span="Uptempo instrumental hip hop beats."
            />
          </ListCard>
        </section>
        <section>
          <NavLinkMain title="Spotify Playlists" />
          <ListCard>
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
          </ListCard>
        </section>
        <section>
          <NavLinkMain title="Para dormir" />
          <ListCard>
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
            <Card
              src={card1}
              alt="capa do audio Peaceful Piano"
              strong="Peaceful Piano"
              span="Relax and indulge with beautiful piano pieces"
            />
          </ListCard>
        </section>
      </div>
    </main>
  );
};

export default Main;
