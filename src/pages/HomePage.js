import React from 'react';
import section1 from '../img/section1-img.png';
import section2 from '../img/section2-img.png';
import section3 from '../img/section3-img.png';
import { Helmet } from 'react-helmet';


function HomePage() {
  return (
    <body>
       <Helmet>
        <title>Accueil - Tutogame</title>
        <meta name="description" content="Page d'accueil de notre plateforme de tutoriels" />
      </Helmet>
      <div className="video-container">
        <iframe style={{ width: "100%", height: "500px" }} src="https://www.youtube.com/embed/KIop1hxFliQ?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&playlist=KIop1hxFliQ&disablekb=1&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <section className="bg-secondary mt-5">
        <div className="row">
          <div className="col-md-6 col-12 pb-4 pe-lg-0 ps-lg-5 d-flex flex-column">
            <h2 className="py-4 border-bottom border-dark mb-lg-5 mb-3 text-start px-5">Nos tutoriels de jeux</h2>
            <p className="text-start pt-lg-5 pt-3 px-5">Bienvenue sur TutoGame, la plateforme incontournable pour tous ceux qui souhaitent apprendre à coder et développer des jeux vidéo. Que vous soyez débutant ou développeur confirmé, notre site regroupe une multitude de tutoriels couvrant diverses technologies et langages de programmation. Avec des guides détaillés, des vidéos explicatives et des exemples pratiques, TutoGame est votre allié pour maîtriser l'art du code et du développement de jeux.</p>
            <div className="d-flex justify-content-start ps-5 mt-auto"><a className="btn btn-dark">En savoir plus</a></div>
          </div>
          <div className="col-md-6 col-12 border-dark border-start ps-0" style={{height: '60vh'}}>
          <div className="h-100">
            <img className="object-fit-cover h-100 w-100" src={section1} alt="Section 1"/>
          </div>
        </div>
        </div>
      </section>
      <section className="bg-secondary mt-5">
        <div className="row">
        <div className="col-md-6 col-12 border-dark border-end pe-0" style={{height: '60vh'}}>
          <div className="h-100">
            <img className="object-fit-cover h-100 w-100" src={section2} alt="Section 2"/>
          </div>
        </div>
          <div className="col-md-6 col-12 pb-4 ps-lg-0 pe-lg-5 d-flex flex-column">
            <h2 className="py-4 border-bottom border-dark mb-lg-5 mb-3 text-start px-5">Nos actus</h2>
            <p className="text-start pt-lg-5 pt-3 px-5">Restez à jour avec les dernières tendances du monde du jeu vidéo, du développement web et du code sur notre page Actualités. Découvrez nos articles exclusifs, interviews de développeurs, analyses des nouvelles technologies et les dernières sorties de jeux vidéo. Ne manquez aucune information essentielle et enrichissez vos connaissances avec des contenus variés et de qualité. TutoGame est votre source d'information privilégiée pour tout ce qui touche au développement et à l'univers des jeux vidéo.</p>
            <div className="d-flex justify-content-start ps-5 mt-auto"><a className="btn btn-dark">En savoir plus</a></div>
          </div>
        </div>
      </section>
      <section className="bg-secondary mt-5">
  <div className="row">
    <div className="col-md-6 col-12 pb-4 pe-lg-0 ps-lg-5 d-flex flex-column order-lg-1 order-2">
      <h2 className="py-4 border-bottom border-dark mb-lg-5 mb-3 text-start px-5">Les jeux de la commu</h2>
      <p className="text-start pt-lg-5 pt-3 px-5">Plongez dans la créativité de notre communauté sur la page Jeux de la Communauté. Explorez les jeux développés par nos utilisateurs en utilisant différentes technologies et langages de programmation. Essayez, critiquez et inspirez-vous des créations des autres membres pour vos propres projets. TutoGame est plus qu'une simple plateforme d'apprentissage, c'est une communauté dynamique où vous pouvez partager vos créations, échanger des idées et collaborer avec d'autres passionnés de développement de jeux.</p>
      <div className="d-flex justify-content-start ps-5 mt-auto"><a className="btn btn-dark">En savoir plus</a></div>
    </div>
    <div className="col-md-6 col-12 border-dark border-start ps-0 order-lg-2 order-1" style={{height: '60vh'}}>
      <div className="h-100">
        <img className="object-fit-cover h-100 w-100" src={section3} alt="Section 3"/>
      </div>
    </div>
  </div>
</section>

      <section className="text-light bg-primary mt-5 d-none d-lg-block">
  <div className="container">
    <div className="row">
      <div className="col-md-6 ps-md-6 pe-md-0 px-4 py-md-6 py-4">
        <div className="h-100 d-flex flex-column justify-content-center align-content-center ">
          <div className="border-news pe-lg-6 pe-0 pb-3 pb-lg-0">
            <h2 className="fs-1 text-start">NEWSLETTER</h2>
            <div className="text-start">
              <p>Ne manquez aucune mise à jour de TutoGame ! Inscrivez-vous à notre newsletter et recevez directement dans votre boîte mail les derniers tutoriels, articles, astuces de développement et jeux de la communauté. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 px-md-6 px-5 py-md-6 py-4 border-start border-white">
            <form action="" method="post">
              <div className="w-100">
                <div className="pe-3 w-50 ">
                  <input className="form-control w-100 text-white border border-white" placeholder="Email" type="email" />
                </div>
              </div>
              <div className="d-flex text-light flex-row align-items-center mt-3">
                <input className="me-3" type="checkbox" value="1" aria-invalid="false" />
                <p className="mb-0">J'accepte de recevoir la newsletter de Tutogame par e-mail.</p>
              </div>
              <div className="d-flex justify-content-start">
              <a className="mt-3 btn btn-light text-primary" type="submit">Je m'inscris</a>
              </div>
            </form>
      </div>
    </div>
  </div>
</section>
</body>
  );
}

export default HomePage;