import React, { Component } from "react";
import { Fixtures } from '../../data/Fixtures'
import queryString from 'query-string';

class Calendar extends Component {


    constructor() {
        super();

        this.fixtures = [];
        this.updateFixtures(0);
    };

    updateFixtures = (month) => {

        this.fixtures = [];

        for (var i = 0; i < Fixtures[month].fixtures.length; i++) {
            const i_ = i;

            var match;
            if (Fixtures[month].fixtures[i_].home) {
                match = "Ottawa ST - " + Fixtures[month].fixtures[i_].opponent;
            }
            else {
                match = Fixtures[month].fixtures[i_].opponent +  " - Ottawa ST";
            }
            const href = "tickets?id=" + i_.toString() + "&month=" + month.toString() + "&step=2";

            const dets = <div>{Fixtures[month].fixtures[i_].date} {". "} {Fixtures[month].fixtures[i_].description}</div>

            this.fixtures.push(<div style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}>
                <div>
                    <strong style={{ marginTop: "15px" }}><a class="simple-link" href={`${href}`}>
                        { match } </a></strong>
                    <p style={{ marginTop: "5px" }}>{ dets }</p>
                </div>
            </div>)


        }
    }

    changeMonth = (e) => {
        this.updateFixtures(e.target.value);
        this.forceUpdate();
    }

    render() {
        return (
            <div style={{ backgroundColor: "#0a0927" }}>

                <div style={{ width: "100%" }}>
                    <div style={{ margin: "auto", width: "95%", backgroundColor: "#ffffff", padding: "45px 20px 61px" }}>

                        <div style={{ margin: "15px auto auto auto", width: "50%", textAlign: "center" }}>
                            <h2><strong>Calendrier de l'&#233;quipe</strong></h2>
                            <div style={{ marginTop: "5px", fontSize: "17px" }}>Toutes les heures sont en EDT (Eastern Daylight Time) sauf indication contraire</div>
                        </div>

                        <div style={{ margin: "40px auto auto auto", width: "50%", display: "flex", flexDirection: "row", justifyContent: "center" }}> 

                            <div style={{ marginTop: "5px" }}>S&#233;lectionnez un mois de la saison 2022/2023 :</div>
                            <select className="form-select" style={{ width: "200px", marginLeft: "30px" }} onChange={this.changeMonth}>

                                <option value="0">Ao&#251;t</option>
                            <option value="1">Septembre</option>
                                <option value="2">Octobre</option>
                                <option value="3">Novembre</option>
                                <option value="4">D&#233;cembre</option>
                                <option value="5">Janvier</option>
                                <option value="6">F&#233;vrier</option>
                                <option value="7">Mars</option>
                                <option value="8">Avril</option>
                                <option value="9">Mai</option>
                            </select>

                        </div>

                        <div style={{ margin: "auto", width: "60%" }}>
                            <div style={{ marginTop: "40px" }}></div>

                            {this.fixtures}

                        </div>

                        

                    </div>
                </div>

            </div>
        );
    }
}
export default Calendar;