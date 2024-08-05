import React from 'react';
import { Helmet } from 'react-helmet';

function RGPDPage() {
  return (
    <div className="mt-5">
        <Helmet>
        <title>Politique de Confidentialité - Tutogame</title>
        <meta name="description" content="Découvrez notre politique de confidentialité et comment nous traitons vos données." />
      </Helmet>
      <div className="container">
        <div className="py-6 text-start">
          <h1 className="pb-4">Politique de Confidentialité</h1>

          <h2 className="wp-block-heading">1. Introduction</h2>
          <p>Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez le site web <a href="https://tutogame.fr">https://tutogame.fr</a> (ci-après «&nbsp;le Site&nbsp;»). En créant un compte et en utilisant nos services, vous acceptez les pratiques décrites dans cette politique.</p>

          <h2 className="wp-block-heading">2. Création et Gestion du Compte</h2>
          <p>Vous pouvez créer un compte sur notre Site pour accéder à nos tutoriels et guides de jeux vidéo. Vous avez la possibilité de vous déconnecter à tout moment. Si vous souhaitez supprimer vos données ou votre compte, vous pouvez le faire via les paramètres de votre compte ou en nous contactant directement.</p>

          <h2 className="wp-block-heading">3. Collecte et Utilisation des Données</h2>
          <p>Les seules données que nous collectons sont celles nécessaires pour améliorer votre expérience utilisateur et suivre au mieux votre formation. Nous ne collectons pas de cookies pour tracer vos activités en ligne.</p>

          <h2 className="wp-block-heading">4. Suppression des Données</h2>
          <p>Vous avez le droit de demander la suppression de vos données personnelles à tout moment. Vous pouvez également supprimer votre compte, ce qui entraînera la suppression de toutes les informations associées.</p>

          <h2 className="wp-block-heading">5. Utilisation des Données</h2>
          <p>Nous utilisons vos données uniquement pour améliorer votre expérience utilisateur sur notre Site et pour suivre votre progression dans les formations. Nous ne vendons pas vos données personnelles et ne les utilisons pas à des fins commerciales.</p>

          <h2 className="wp-block-heading">6. Newsletter</h2>
          <p>Notre service de newsletter n'est pas encore fonctionnel. Soyez assuré qu'aucune de vos données ne sera utilisée à des fins de marketing ou pour générer des revenus.</p>

          <h2 className="wp-block-heading">7. Protection des Données</h2>
          <p>Nous prenons la protection de vos données très au sérieux et mettons en place des mesures techniques et organisationnelles pour garantir leur sécurité.</p>

          <h2 className="wp-block-heading">8. Contact</h2>
          <p>Pour toute question concernant cette politique de confidentialité, ou pour exercer vos droits relatifs à vos données personnelles, veuillez nous contacter à l'adresse suivante :</p>
          <p><strong>Contact:</strong><br/>
          SYMAT, SRL au capital de 1.000 euros<br/>
          Siège social : 10 RUE JOSEPH, 91300 MASSY<br/>
          RCS de Nanterre n° B 480 438 506<br/>
          Numéro de contact : <a href="tel:0125211221">01 25 21 12 21</a><br/>
          E-mail : <a href="mailto:contact@tutogame.com">contact@tutogame.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default RGPDPage;