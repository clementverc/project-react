import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/fontawesome-free-brands'

class Permis extends Component {
  render() {
    return (
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h4 className="mb-0">
              <a className="btn btn-link" data-toggle="collapse" type="button" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <FontAwesomeIcon icon={faPlusCircle} />
                Permis A
              </a>
            </h4>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <h4>Le permis A permet de conduire :</h4>
              <p>-Une moto, avec ou sans side-car, quelle que soit sa puissance.</p>
              <p>-Un 3 roues, quelle que soit sa puissance.</p>
              <h4>Comment l&apos;obtenir ?</h4>
              <p>Pour obtenir la catégorie A du permis de conduire, vous devez étre titulaire de la catégorie A2 depuis au moins 2 ans et avoir suivi une formation de 7 heures avec succès.</p>
              <h4>La formation :</h4>
              <p>Le but de cette formation est de vous adapter à un nouveau véhicule et de vous amener à une pratique sécuritaire de la conduite d&apos;une moto de plus de 35 kilowatts (kw).</p>
              <h4>La formation est composée en trois parties:</h4>
              <p>-Une sequence théorique de 2 heures,</p>
              <p>-Une sequence pratique hors circulation de 2 heures,</p>
              <p>-Une sequence pratique en circulation de 3 heures.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <a className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <FontAwesomeIcon icon={faPlusCircle} />
                Permis A2
              </a>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              <h4>Le permis A2 permet de conduire :</h4>
              <p>-Une moto (avec ou sans side-car), dont la puissance n&apos;excède pas 35 kilowatts (47,5 ch) et dont le rapport puissance/poids n&apos;excède pas 0,2 kw par kilogramme,</p>
              <p>-Un 3 roues d&apos;une puissance maximum de 15 kw.</p>
              <h4>Comment l&apos;obtenir ?</h4>
              <p>-Vous devez avoir au moins 18 ans.</p>
              <p>-Posséder l&apos;ASSR ou l&apos;ASR.</p>
              <p>Le passage du permis</p>
              <p>Vous devez d&apos;abord passer avec succès l&apos;épreuve théorique générale, le code.</p>
              <p>Ensuite vient la partie pratique avec deux épreuves (une épreuve hors circulation (HC) et une épreuve en circulation (CIR):</p>
              <p>L&apos;inspecteur commence à chaque fois par vérifier votre identité.</p>
              <h4>&Eacute;preuve hors circulation(plateau)</h4>
              <p>L&apos;épreuve HC dure 17 minutes et 30 secondes. Elle permet de vérifier que vous avez une ma&icirc; trise et une connaissance suffisantes de votre moto de catégorie A2 pour rouler en sécurité.</p>
              <p>Vous devez avoir satisfait à l&apos;épreuve HC pour passer l&apos;épreuve en circulation.</p>
              <p>&Agrave; partir de la date de réussite, vous conservez le bénéfice de cette épreuve HC pour 5 épreuves CIR pendant 3 ans, sous réserve de la validité du code.</p>
              <h4>&Eacute;preuve en circulation</h4>
              <p>Pour passer la conduite, vous devez avoir les équipements obligatoires (casque homologué, gants, blouson et pantalon ou combinaison, bottes ou chaussures montantes).</p>
              <p>L&apos;épreuve CIR dure 35 minutes.</p>
              <h4>Elle permet de vérifier que vous :</h4>
              <p>-respectez le code de la route,</p>
              <p>-pouvez circuler en sécurité pour vous et les autres usagers des voies publiques,</p>
              <p>-ma&icirc;trisez les commandes et la manipulation du véhicule,</p>
              <p>-&ecirc;tes suffisamment autonome dans la réalisation du trajet.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <a className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  Permis A1
                </a>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <h4>Le permis A1 permet de conduire :</h4>
                <p>-Une moto légère (avec ou sans side-car) d&apos;une cylindrée maximale de 125 cm &sup3;, d&apos;une puissance n&apos;excédant pas 11 kilowatts et dont le rapport puissance/ poids ne dépasse pas 0,1 kilowatt par kilogramme,</p>
                <p>-Un 3 roues d&apos;une puissance maximale de 15 kilowatts.</p>
                <h4>Le passage du permis :</h4>
                <p>Vous devez d&apos;abord passer avec succès l&apos;épreuve théorique générale, le code.</p>
                <p>Ensuite vient la partie pratique avec deux épreuves (une épreuve hors circulation (HC) et une épreuve en circulation (CIR):</p>
                <p>L&apos;inspecteur commence à chaque fois par vérifier votre identité.</p>
                <h4>épreuve hors circulation</h4>
                <p>L&apos;épreuve HC dure 17 minutes et 30 secondes. Elle permet de vérifier que vous avez une ma&icirc; trise et une connaissance suffisantes de votre moto de catégorie A1 pour rouler en sécurité.</p>
                <p>Vous devez avoir satisfait à l&apos;épreuve HC pour passer l&apos;épreuve en circulation.</p>
                <p>&Agrave; partir de la date de réussite, vous conservez le bénéfice de cette épreuve HC pour 5 épreuves CIR pendant 3 ans, sous réserve de la validité du code.</p>
                <h4>épreuve en circulation</h4>
                <p>Pour passer la conduite, vous devez avoir les équipements obligatoires (casque homologué, gants, blouson et pantalon ou combinaison, bottes ou chaussures montantes).</p>
                <p>L&apos;épreuve CIR dure 35 minutes.</p>
                <p>Elle permet de vérifier que vous :</p>
                <p>-respectez le code de la route,</p>
                <p>-pouvez circuler en sécurité pour vous et les autres usagers des voies publiques,</p>
                <p>-ma&icirc; trisez les commandes et la manipulation du véhicule,</p>
                <p>-&ecirc;tes suffisamment autonome dans la réalisation du trajet.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h4 className="mb-0">
                <a className="collapsed" role="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  Permis AM / BSR
                </a>
              </h4>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body">
                <h5>Le BSR (ou la catégorie AM du permis de conduire) permet de conduire dès l&apos;&acirc;ge de 14 ans :</h5>
                <p>un cyclomoteur d&apos;une cylindrée de 50 cm&sup3; maximum (moteur à combustion interne) ou d&apos;une puissance maximale de 4 kW et qui ne dépasse pas 45 km/h de vitesse, ou un quadricycle léger à moteur d&apos;une puissance maximale de 4kw (mini-voitures classNameées &quot;voiturettes&quot; ou quads dont la cylindrée n&apos;excède pas 50cm&sup3;) et qui ne dépasse pas 45 km/h de vitesse.</p>
                <p>Le permis AM n&apos;est pas soumis au barème de points comme les autres permis de conduire.</p>
                <p>La suspension ou annulation du permis de conduire n&apos;affectera pas la catégorie AM qui correspond à un &quot;autre droit de conduire&quot;.</p>
                <h4>Vous etes né avant 1988 :</h4>
                <p>Que vous soyez ou non titulaire d&apos;un permis de conduire, vous pouvez conduire un cyclomoteur de 50 cm&sup3; ou 4 kw ou une voiturette sans formalité particulière.</p>
                <h4>Vous etes né en 1988 ou apres :</h4>
                <p>Pour conduire un cyclomoteur de 50 cm&sup3; (ou 4 kw) ou une voiturette, vous devez &ecirc;tre titulaire :</p>
                <p>-soit d&apos;une catégorie du permis autre que la catégorie AM,</p>
                <p>-soit de la catégorie AM (obligatoire pour un jeune atteignant 14 ans),</p>
                <p>-soit d&apos;un titre équivalent délivré par un &Eacute;tat de l&apos;Union européenne ou de l&apos;Espace économique européen (EEE).</p>
                <p>La formation :</p>
                <p>Elle est validée par l&apos;attestation scolaire de sécurité routière en classNamee de 5e (pour l&apos;ASSR1) et en classNamee de 3e (pour l&apos;ASSR2). Pour un jeune non scolarisé ou en apprentissage, cette formation théorique est validée par l&apos;attestation de sécurité routière (ASR).</p>
                <p>Attention :</p>
                <p>l&apos;ASSR de 1er ou de 2e niveau ou l&apos;ASR est obligatoire pour s&apos;inscrire à la formation pratique du BSR et n&apos;autorise pas le jeune à conduire un véhicule à moteur.</p>
                <p>Formation pratique</p>
                <p>La formation pratique de 7 heures est assurée par une école de conduite ou par une association d&apos;insertion ou de réinsertion sociale ou professionnelle agréée par le préfet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Permis
