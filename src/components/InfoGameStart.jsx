import React, { Component } from "react";

class InfoGameStart extends Component {
  render() {
    return (
      <div>
        <dl>
          <dt>Révision des tables de multiplaction</dt>
          <dd>
            Les règles sont simples, une foi que vous avez rentré votre surnom,
            vous cliquez sur Démarrer.
          </dd>
          <dd>
            Vous avez 30 secondes pour répondre le plus vite possible à ces
            multiplications. Chaque bonnes réponses vous donne 1 point et chaque
            erreur vous enlève 1 point.
          </dd>
          <dd>Les chiffres sont aléatoirs entre 0 et 9</dd>
        </dl>
      </div>
    );
  }
}

export default InfoGameStart;
