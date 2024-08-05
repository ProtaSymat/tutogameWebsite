import React from 'react';
import { Helmet } from 'react-helmet';

function MentionsPage() {
  return (
    <div className="mt-5">
      <Helmet>
        <title>Mentions Légales - Tutogame</title>
        <meta name="description" content="Mentions Légales" />
      </Helmet>
      <div className="container">
        <div className="py-6 text-start">
          <h1 className="pb-4">MENTIONS LÉGALES</h1>
          <p>L’accès et l’utilisation du site web <a href="https://tutogame.fr">https://tutogame.fr</a> (ci-après «&nbsp;le Site&nbsp;») sont soumis aux présentes mentions légales, à la politique de confidentialité et à toutes les lois et/ou réglementations applicables. </p>
          <h2 className="wp-block-heading">Propriétaire</h2>
          <p>La société SYMAT, SRL au capital de 1.000 euros, dont le siège social est situé 10 RUE JOSEPH 91300 MASSY, enregistrée au Registre du Commerce et des Sociétés (RCS) de Nanterre sous le n° B 480 438 506. <br/>Numéro de contact: <a href="tel:0125211221">01 25 21 12 21</a>
            <br/>Adresse e-mail de contact: <a href="mailto:contact@lilydeneuilly.com" data-type="mailto" data-id="mailto:contact@lilydeneuilly.com"></a>
            <a href="mailto:contact@tutogame.com">contact@tutogame.com</a>
          </p>
          <h2 className="wp-block-heading">Conception du Site</h2>
          <p>Symat <br/>Adresse : 52 rue du Lapin d'or, 91300 MASSY <br/>Site internet :&nbsp; <a href="https://www.mathys.debonmatin.fr/" target="_blank" rel="noopener">https://www.mathys.debonmatin.fr/</a>
            <br/>Adresse e-mail de contact : contact@mathys.com
          </p>
          <h2 className="wp-block-heading">Directeur de publication</h2>
          <p>Le Directeur de publication est : M. SYMAT <br/>Adresse e-mail de contact :&nbsp; <a href="mailto:contact@mathys.com"></a>
            <a href="mailto:contact@mathys.com">contact@mathys.com</a>
          </p>
          <h2 className="wp-block-heading">Propriété intellectuelle et contrefaçons</h2>
          <p>SYMAT est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, sauf autorisation écrite préalable de : SYMAT. Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
          <h2 className="wp-block-heading">Hébergement</h2>
          <p>OVH <br/>2 rue Kellermann <br/>59100 Roubaix <br/>France&nbsp; <br/>Numéro de téléphone : +33 9 72 10 10 07 </p>
        </div>
      </div>
    </div>
  );
}

export default MentionsPage;