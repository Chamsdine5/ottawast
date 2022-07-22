import React, { Component } from "react";
import queryString from 'query-string';
import { Fixtures } from '../../data/Fixtures'


class Tickets extends Component {

    constructor() {
        super();
        if (!(Object.keys(queryString.parse(window.location.search)).length === 0)) {
            if (!(queryString.parse(window.location.search).id == null) && !(queryString.parse(window.location.search).month == null) &&
                !(queryString.parse(window.location.search).step == null)) {


                this.id = Number(queryString.parse(window.location.search).id);
                this.month = Number(queryString.parse(window.location.search).month);
                this.step = queryString.parse(window.location.search).step;

                this.match = "Contre " + Fixtures[this.month].fixtures[this.id].opponent + " le " + Fixtures[this.month].fixtures[this.id].date;
            }
            else {
                window.open("/", "_self");
            }
        }
        else {
            this.step = "1";
        }

    };

    submitForm = (e) => {
        e.preventDefault();
        if (this.step == "2") {
            window.location.href = "/tickets?id=" + this.id.toString() + "&month=" + this.month.toString() + "&step=3";
        }
        else {
            window.location.href = "/confirmed";
        }
    }


  render() {
      return (
          <div style={{ backgroundColor: "#0a0927" }}>

              <div style={{ width: "100%" }}>
                  <div style={{ margin: "auto", width: "95%", backgroundColor: "#ffffff", padding: "45px 20px 61px" }}>
                      <div style={{ margin: "45px auto auto auto", width: "50%", textAlign: "center" }}>
                          <h2><strong>Acheter un billet</strong></h2>
                      </div>


                      {(() => {
                          if (this.step == "2") {
                              return (
                                  <div>
                      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "35px" }}>
                          <img style={{ width: "305px", margin: "auto" }} id="image" src={require('../../assets/step2.png')} />
                      </div>

                                      <p style={{ width: "75%", margin: "25px auto auto auto", textAlign: "center" }}>
                                          <strong>Match S&#233;lectionn&#233;  : </strong> {this.match}
            </p>

                                      <div style={{ margin: "45px auto 0px auto", width: "50%", textAlign: "center" }}>
                                          <h3>Entrez vos informations</h3>
                                      </div>

                                      <form style={{ margin: "25px auto", width: "75%" }} onSubmit={ this.submitForm }>
                                          <div className="mb-3">
                                              <label for="nom" className="form-label">Nom </label>
                                              <input type="text" className="form-control" id="nom" required />
                                          </div>

                                          <div className="mb-3">
                                              <label for="prenom" className="form-label">Pr&#233;nom </label>
                                              <input type="text" className="form-control" id="prenom" required />
                                          </div>

                                          <div className="mb-3">
                                              <label for="phone" className="form-label">Num&#233;ro de T&#233;l&#233;phone </label>
                                              <input type="number" className="form-control" id="phone" required />
                                          </div>

                                          <div class="mb-3">
                                              <label for="addresseEmail" class="form-label">Addresse Courriel</label>
                                              <input type="email" className="form-control" id="addresseEmail" aria-describedby="emailHelp" required />
                                          </div>



                                          <label for="expert" className="form-label">Section du Stade</label>
                                          <select className="form-select" id="expert">
                                              <option value="1">Section A</option>
                                              <option value="2">Section B</option>
                                              <option value="3">Section C</option>
                                              <option value="1">Section D</option>
                                              <option value="2">Section E</option>
                                              <option value="3">Section F</option>
                                          </select>



                                          <div style={{ marginTop: "25px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                              <button type="submit" class="btn btn-primary">Suivant</button>
                                          </div>
                                      </form>

                                  </div> 
                              )
                          }

                          else if (this.step == "3")
                          {
                              return (
                                  <div>
                                      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "35px" }}>
                                          <img style={{ width: "305px", margin: "auto" }} id="image" src={require('../../assets/step3.png')} />
                                      </div>

                                      <p style={{ width: "75%", margin: "25px auto auto auto", textAlign: "center" }}>
                                          <strong>Match S&#233;lectionn&#233;  : </strong> {this.match}
            </p>

                                      <div style={{ margin: "45px auto 0px auto", width: "50%", textAlign: "center" }}>
                                          <h3>Effectuer le paiement (55$)</h3>
                                      </div>

                                      <form style={{ margin: "25px auto", width: "75%" }} onSubmit={this.submitForm}>
                                          <div className="mb-3">
                                              <label for="cardNumber" className="form-label">Num&#233;ro de Carte </label>
                                              <input type="number" className="form-control" id="cardNumber" required />
                                          </div>

                                          <div className="mb-3">
                                              <label for="year" className="form-label">Ann&#233;e d&rsquo;Expiration </label>
                                              <input type="number" className="form-control" id="year" required />
                                          </div>

                                          <div className="mb-3">
                                              <label for="cvv" className="form-label">CVV </label>
                                              <input type="number" className="form-control" id="cvv" required />
                                          </div>

                                          <div className="mb-3">
                                              <label for="cardName" className="form-label">Nom sur la Carte </label>
                                              <input type="text" className="form-control" id="cardName" required />
                                          </div>

                                          <div style={{ marginTop: "25px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                              <button type="submit" class="btn btn-primary">Confirmer</button>
                                          </div>
                                      </form>

                                  </div>
                              )
                          }
                          else if (this.step == "1") {
                              return (
                                  <div>
                                      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "35px" }}>
                                          <img style={{ width: "305px", margin: "auto" }} id="image" src={require('../../assets/step1.png')} />
                                      </div>

                                      <p style={{ width: "75%", margin: "25px auto auto auto", textAlign: "center" }}>
                                          Allez dans la section <a href="/calendar">Calendrier</a> et s&#233;lectionnez le match souhait&#233;.
                                      </p>

                                      <div style={{ marginTop: "600px"}}></div>

                                      

                                  </div>
                              )
                          }
                      })()}

                  </div>
              </div>

          </div>
      );
  }
}
export default Tickets;