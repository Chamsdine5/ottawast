import React, { Component } from "react";
import queryString from 'query-string';
import { quiz } from '../../data/Quiz';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TiDelete } from "react-icons/ti";


class Question extends Component {

    constructor() {
        super();

        this.questionId = -1;
        this.nCorrect = 0;
        this.nextQuestion(null);
    };

    confirmQuestion = (e) => {

        if (this.answerId == -1) {
            alert("Veuillez s\u{E9}lectionner une r\u{E9}ponse");  
        }
        else {
            this.showing = "answer";
            if (quiz[this.questionId].answer == this.answerId) {
                this.textResultQuestion = <div style={{ marginBottom: "8px", textAlign: "center", fontSize: "25px" }}><IoIosCheckmarkCircle style={{
                    color: "#00bf00", marginBottom: "5px",
                    width: "37px", height: "37px"
                }} />
                    <span>&nbsp;&nbsp;</span> Bonne r&#233;ponse !</div>;

                this.nCorrect++;
            }
            else {
                this.textResultQuestion = <div><div style={{ marginBottom: "8px", textAlign: "center", fontSize: "25px" }}><TiDelete style={{
                    color: "#df0000", marginBottom: "5px",
                    width: "37px", height: "37px"
                }} />
                    <span>&nbsp;&nbsp;</span> Mauvaise r&#233;ponse !</div>;
                <div style={{ marginTop: "40px", textAlign: "center" }}><strong>R&#233;ponse correcte :</strong> {quiz[this.questionId].choices[quiz[this.questionId].answer]}</div>
                </div>
            }

            this.forceUpdate();
        }
    }

    nextQuestion = (e) => {
        this.answerId = -1;

        if (this.questionId != 4) {
            this.showing = "question";
            this.questionId++;
            console.log(this.questionId);

            this.question = quiz[this.questionId].question;
            this.choice0 = quiz[this.questionId].choices[0];
            this.choice1 = quiz[this.questionId].choices[1];
            this.choice2 = quiz[this.questionId].choices[2];
            this.choice3 = quiz[this.questionId].choices[3];
        }

        else {
            this.showing = "finished";
        }

        this.forceUpdate();
    }

    onAnswerClick = (e) => {
        this.answerId = Number(e.target.id);
    }

  render() {
      return (
          <div style={{ backgroundColor: "#0a0927" }}>

              <div style={{ width: "100%" }}>
                  <div style={{ margin: "auto", width: "95%", backgroundColor: "#ffffff", padding: "45px 20px 61px" }}>

                      {(() => {
                          if (this.showing == "question") {
                              return (
                <div>
                                      <div style={{ margin: "15px auto auto auto", width: "50%", textAlign: "center" }}>
                                          <h3><strong>Question {this.questionId + 1}/5</strong></h3>
                                      </div>

                                      <div style={{ width: "75%", margin: "25px auto auto auto" }}>
                                          <div style={{ marginBottom: "8px" }}><strong>{this.question}</strong></div>

                                          <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="0" onChange={this.onAnswerClick} />
                                              <label class="form-check-label" for="0">
                                                  {this.choice0}
                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="1" onChange={this.onAnswerClick} />
                                              <label class="form-check-label" for="1">
                                                  {this.choice1}
                                  </label>
                                          </div>

                                          <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="2" onChange={this.onAnswerClick}/>
                                              <label class="form-check-label" for="2">
                                                  {this.choice2}
                                  </label>
                                          </div>

                                          <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="3" onChange={this.onAnswerClick}/>
                                              <label class="form-check-label" for="3">
                                                  {this.choice3}
                                  </label>
                                          </div>




                                      </div>


                                      <div style={{ textAlign: "center" }}><button className="btn btn-primary" style={{
                                          marginTop: "33px", marginBottom: "500px", backgroundColor: "#1b4081",
                                          borderColor: "#1b4081"
                                      }} onClick={this.confirmQuestion}>
                                          Confirmer </button></div>
                </div>
                              )
                          }

                          else if (this.showing == "answer") {
                              return (

                                  <div>
                                      <div style={{ margin: "15px auto auto auto", width: "50%", textAlign: "center" }}>
                                          <h3><strong>Question {this.questionId + 1}/5</strong></h3>
                                      </div>

                                      <div style={{ width: "75%", margin: "25px auto auto auto" }}>
                                          {this.textResultQuestion}
                                      </div>


                                      <div style={{ textAlign: "center" }}><button className="btn btn-primary" style={{
                                          marginTop: "33px", marginBottom: "500px", backgroundColor: "#1b4081",
                                          borderColor: "#1b4081"
                                      }} onClick={this.nextQuestion}>
                                          Suivant </button></div>
                                  </div>
                              )
                          }

                          else {
                              return (
                                  <div>
                                      <div style={{ margin: "15px auto auto auto", width: "50%", textAlign: "center" }}>
                                          <h3><strong>Quiz termin&#233;</strong></h3>
                                      </div>

                                      <div style={{ width: "75%", margin: "25px auto auto auto" }}>

                                          <div>
                                              <div style={{ marginTop: "40px", textAlign: "center" }}><strong>Nombre de bonnes r&#233;ponses :</strong> {this.nCorrect}/5</div>
                                          </div>

                                          <div style={{ marginTop: "38px", textAlign: "center", fontStyle: "italic" }}>
                                              Merci d'avoir compl&#233;t&#233; ce quiz</div>;

                                      </div>


                                      <div style={{ textAlign: "center", marginBottom: "500px", marginTop: "15px" }}><a href="/quiz">
                                          Recommencer </a></div>
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
export default Question;