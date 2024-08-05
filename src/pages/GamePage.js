import React, { useRef } from 'react';
import soon from '../img/soon-img.png';
import vlad from '../img/vladgame-img.png';
import bubble from '../img/bubblegame-img.png';
import tutogame from '../img/tutogame-img.png';
import { Helmet } from 'react-helmet';

function GamePage() {
  const gamesRow1Ref = useRef(null);
  const gamesRow2Ref = useRef(null);

  const scroll = (ref, direction) => {
    console.log(`Scrolling ${direction}`);
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      console.log('La référence est null');
    }
  };

  const gamesRow1 = [
    { id: 1, title: 'Vlads Adventure', description: 'Jeu de plateforme pour speedrun', imageUrl: vlad, url: 'https://vladgame-protasymats-projects.vercel.app/' },
    { id: 2, title: 'Bubble Shooter', description: 'Tir sur les bulles !', imageUrl: bubble, url: 'http://193.70.0.177/bubble-peteur/bubble-shooter.html'},
    { id: 3, title: 'Tutogame - Le JEU', description: 'Découvre le jeu de nos tutoriels', imageUrl: tutogame, url:'http://193.70.0.177/realgame1/' },
    { id: 4, title: 'Moto 3xM', description: 'Jeu de moto sur Phaser !', imageUrl: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/2c6d5a46cdbceada277c870ce1c389ee.jpg', url:'https://www.jeux.fr/jeu/moto-x3m' },
    { id: 5, title: 'GunFu Stickman 2', description: 'Le célèbre jeu du même créateur que le premier', imageUrl: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/f693e1500ddd52d5d414ff5ea11da3e7.png", url: "https://www.jeux.fr/jeu/gunfu-stickman-2" },
    { id: 6, title: 'Soon', description: 'Bientôt disponible', imageUrl: soon },
  ];
  
  const gamesRow2 = [
    { id: 1, title: 'Docteur des pieds', description: 'Un jeu étrange mais.. satisfaisant', imageUrl: "https://m.media-amazon.com/images/I/71WM3RGBpRL.png", url: "https://www.jeux.fr/jeu/docteur-des-pieds" },
    { id: 2, title: 'Crab Game', description: 'Jeu disponible sur steam dès maintenant (UnrealEngine)', imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1782210/ss_68030009c572cb7a4f6824e18fcc56d9becb5b28.1920x1080.jpg", url: "https://www.jeuxvideo.com/news/1490423/crab-game-le-battle-royale-sur-pc-inspire-de-la-serie-squid-game-sur-netflix.htm" },
    { id: 3, title: 'Impostor', description: 'Un jeu bien original...', imageUrl: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/11/among-us-impostor.jpg", url: "https://www.jeux.fr/jeu/impostor" },
    { id: 4, title: 'Soon', description: 'Bientôt disponible', imageUrl: soon, url: "" },
    { id: 5, title: 'Soon', description: 'Bientôt disponible', imageUrl: soon, url: "" },
  ];

  return (
    <div className="mt-5">
      <Helmet>
        <title>Vos jeux - Tutogame</title>
        <meta name="description" content="Vos jeux" />
      </Helmet>
      <div className="container">
        <div className="text-start border-bottom border-primary pb-3">
        <h1 className="k-suture">Vos jeux</h1>
        <p className="k-suture mb-0">Explorez les créations de notre communauté. Découvrez, jouez et inspirez-vous des jeux développés par nos utilisateurs en utilisant diverses technologies. Partagez vos propres projets et échangez avec d'autres passionnés sur TutoGame.</p>
      </div>
      <section className="pt-3">
        <div className="carousel-container">
          <div className="arrow left k-suture" onClick={() => scroll(gamesRow1Ref, 'left')}>&lt;</div>
          <h2 className="py-4 text-start fs-3">La crème de la crème</h2>
            <div ref={gamesRow1Ref} className="carousel-wrapper">
              {gamesRow1.map((game, index) => (
                <a href={game.url} target='_blank' rel="noopener noreferrer" key={index} className="game-item text-decoration-none text-dark">
                  <img src={game.imageUrl} alt={game.title} className="object-fit-cover" style={{ width: '250px', height: '180px' }} />
                  <h3 className="fs-5 text-start pt-4">{game.title}</h3>
                  <p className="text-start pt-2">{game.description}</p>
                </a>
              ))}
            </div>
          <div className="arrow right k-suture" onClick={() => scroll(gamesRow1Ref, 'right')}>&gt;</div>
      </div>
      </section>
      <section className="pt-2">
        <div className="carousel-container">
          <div className="arrow left k-suture" onClick={() => scroll(gamesRow2Ref, 'left')}>&lt;</div>
          <h2 className="py-4 text-start fs-3">Les jeux de la semaine</h2>
            <div ref={gamesRow2Ref} className="carousel-wrapper">
              {gamesRow2.map((game, index) => (
                <a href={game.url} target='_blank' rel="noopener noreferrer" key={index} className="game-item text-decoration-none text-dark">
                  <img src={game.imageUrl} alt={game.title} className="object-fit-cover" style={{ width: '250px', height: '180px' }} />
                  <h3 className="fs-5 text-start pt-4">{game.title}</h3>
                  <p className="text-start pt-2">{game.description}</p>
                </a>
              ))}
            </div>
          <div className="arrow right k-suture" onClick={() => scroll(gamesRow2Ref, 'right')}>&gt;</div>
      </div>
      </section>
    </div>
  </div>
  );
}

export default GamePage;