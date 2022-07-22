import React, { Component } from "react";


class Quiz extends Component {

    constructor() {
        super();
    };

    startQuiz = (e) => {
        window.location.href = "/question";
    }

  render() {
      return (
          <div style={{ backgroundColor: "#0a0927" }}>

              <div style={{ width: "100%" }}>
                  <div style={{ margin: "auto", width: "95%", backgroundColor: "#ffffff", padding: "45px 20px 61px" }}>
                      <div style={{ margin: "15px auto auto auto", width: "50%", textAlign: "center" }}>
                          <h2><strong>Quiz sur Ottawa ST</strong></h2>
                      </div>

                      <div style={{ margin: "35px auto auto auto", width: "90%" }}>
                          <div style={{ fontStyle: "italic", textAlign: "center" }}>Bienvenue dans quiz sur votre &#233;quipe favorite ! Avant de proc&#233;der, soyez s&#251;rs d&rsquo;avoir lu la section suivante qui vous donne les informations utiles pour
                          le quiz. Ce n&rsquo;est cependant pas obligatoire, si vous jugez que vous &#234;tes pr&#234;ts et que vous connaissez assez l&rsquo;&#233;quipe, vous pouvez directement
                              commencer.</div>

                          <div style={{ marginTop: "50px" }}></div>

                          <p>Ottawa ST a &#233;t&#233; fond&#233; en 1890 par l&rsquo;association de sport de la ville, le premier pr&#233;sident fut Paul Parker. Le club participa pour la premi&#232;re
                          fois au championnat national lors de la saison 1891/1892 et termina 4&#232;me, une performance remarquable pour une premi&#232;re participation de club. Au fil des
                          ann&#233;es, gr&#226;ce &#224; ses nombreux troph&#233;es remport&#233;s, Ottawa ST attira de nombreux joueurs de hauts calibres et s&rsquo;inscriva comme l&rsquo;un des meilleurs
                              clubs non seulement du Canada mais aussi de l&rsquo;Am&#233;rique du Nord.</p>
                          <p>Ottawa ST remporta son premier troph&#233;e en 1895. Il s&rsquo;agissait de la coupe nationale. D&#232;s lors Ottawa ST a remport&#233; 41 ligues nationales,
                          57 coupes nationales, 15 coupes continentales et 2 coupes inter&ndash;continentales. En 1975, Ottawa ST fut nomm&#233; par la conf&#233;d&#233;ration nord&ndash;am&#233;ricaine de
                              soccer le deuxi&#232;me meilleur club du si&#232;cle.</p>
                          <p>Les valeurs que soutiennent Ottawa ST sont : courage, pers&#233;v&#233;rence et fair&ndash;play. Ottawa ST n&rsquo;est pas seulement reconnu dans le domaine footballistique
                          mais aussi dans deux nombreux autres domaines gr&#226;ce &#224; ses diff&#233;rentes actions men&#233;es. L&rsquo;&#233;quipe dispose aussi d&rsquo;un centre de formation appel&#233;
                              OST Junior, qui sert &#224; introduire et &#224; former les plus jeunes au Soccer.</p>


                          <div style={{ textAlign: "center", marginTop: "77px"  }}><button className="btn btn-primary" style={{ marginBottom: "250px", backgroundColor: "#1b4081",
                              borderColor: "#1b4081"
                          }} onClick={this.startQuiz}>
                              Commencer le quiz </button></div>

                      </div>

                  </div>
              </div>

          </div>
      );
  }
}
export default Quiz;