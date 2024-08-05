import React from 'react';
import { Helmet } from 'react-helmet';

function ContactPage() {
  return (
    <div className="mt-5">
      <Helmet>
        <title>Contact - Tutogame</title>
        <meta name="description" content="Contact" />
      </Helmet>
      <h1 className="k-suture">Contactez-nous</h1>

      <div className="container py-5">

        <div className="row border-primary border-top border-bottom px-5 py-4">
          <div className="col-12 col-md-6">
            <h4 className="k-suture fs-6">Nous trouver</h4>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <p>Tutogame<br/>
              2 Windmill Ln,<br/>
              Dublin Docklands, Dublin 2, D02 F206, Irlande</p>
          </div>
        </div>
        
        <div className="row border-primary border-bottom px-5 py-4">
          <div className="col-12 col-md-6">
            <h4 className="k-suture fs-6">Informations</h4>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <p>Par téléphone<br/>
              <strong>01 25 21 12 21 ou 06 72 83 75 05</strong><br/>
              Par email pour des demandes spéciales<br/>
              <strong>contact@tutogame.com</strong>
            </p>
          </div>
        </div>
	    </div>

    </div>
  );
}

export default ContactPage;