import React from 'react';
import { Helmet } from 'react-helmet';

function CGVPage() {
  return (
    <div className="mt-5">
        <Helmet>
        <title>Conditions générales de vente - Tutogame</title>
        <meta name="description" content="CGV" />
      </Helmet>
      <div className="container">
        <div className="py-6 text-start">
          <h1 className="pb-4">Conditions Générales de Vente</h1>
          
          <h5 className="wp-block-heading">1. Acceptation des CGV</h5>
          <p>En accédant et en utilisant le Site, vous acceptez sans réserve les présentes CGV. Si vous n'acceptez pas ces CGV, vous ne devez pas utiliser le Site.</p>
          
          <h5 className="wp-block-heading">2. Services Proposés</h5>
          <p>Tutogame.fr propose des tutoriels et des guides pour divers jeux vidéo (ci-après « les Services »). Les Services sont accessibles via abonnement mensuel ou achat à l'unité.</p>
          
          <h5 className="wp-block-heading">3. Commandes</h5>
          <h6>3.1. Processus de Commande</h6>
          <p>Les commandes se font directement en ligne sur le Site. Vous devez sélectionner le Service souhaité et suivre le processus de commande.</p>
          
          <h6>3.2. Confirmation de Commande</h6>
          <p>Une fois votre commande passée, vous recevrez un e-mail de confirmation récapitulant les détails de votre achat.</p>
          
          <h6>3.3. Annulation de Commande</h6>
          <p>Vous pouvez annuler votre commande dans un délai de 14 jours à compter de la date de confirmation de la commande, sauf pour les Services déjà exécutés ou accessibles immédiatement après l'achat.</p>
          
          <h5 className="wp-block-heading">4. Prix et Modalités de Paiement</h5>
          <h6>4.1. Prix</h6>
          <p>Les prix des Services sont indiqués en euros toutes taxes comprises (TTC). SYMAT se réserve le droit de modifier les prix à tout moment, mais les Services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>
          
          <h6>4.2. Paiement</h6>
          <p>Le paiement s'effectue en ligne par carte bancaire ou tout autre moyen proposé sur le Site. Les paiements sont sécurisés par notre prestataire de paiement.</p>
          
          <h5 className="wp-block-heading">5. Livraison des Services</h5>
          <p>Les Services commandés sont livrés instantanément sous forme numérique après confirmation du paiement. Vous recevrez un lien pour accéder aux contenus directement par e-mail.</p>
          
          <h5 className="wp-block-heading">6. Droit de Rétractation</h5>
          <p>Conformément aux dispositions de l’article L.221-18 du Code de la consommation, vous disposez d’un délai de 14 jours pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités, à l’exception des Services immédiatement accessibles ou déjà utilisés.</p>
          
          <h5 className="wp-block-heading">7. Responsabilité</h5>
          <p>SYMAT ne saurait être tenue pour responsable de tout dommage résultant de l'utilisation du Site ou des Services fournis, y compris en cas de virus informatique ou de perte de données.</p>
          
          <h5 className="wp-block-heading">8. Propriété Intellectuelle</h5>
          <p>Tous les contenus présents sur le Site, incluant mais non limité aux textes, images, graphismes, logos, icônes et logiciels, sont la propriété de SYMAT ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site est strictement interdite sans autorisation écrite préalable de SYMAT.</p>
          
          <h5 className="wp-block-heading">9. Données Personnelles</h5>
          <p>Les informations collectées sur le Site sont nécessaires pour le traitement des commandes et la gestion des relations commerciales. Conformément à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et d'opposition aux données personnelles vous concernant.</p>
          
          <h5 className="wp-block-heading">10. Modifications des CGV</h5>
          <p>SYMAT se réserve le droit de modifier les présentes CGV à tout moment. Les modifications seront applicables dès leur mise en ligne sur le Site.</p>
          
          <h5 className="wp-block-heading">11. Droit Applicable et Litiges</h5>
          <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant de saisir les tribunaux compétents.</p>

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

export default CGVPage;