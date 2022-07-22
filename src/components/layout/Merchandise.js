import React, { Component } from "react";
import { products } from '../../data/Products'

class Merchandise extends Component {

    constructor() {
        super();
        this.selection = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
        this.results = [];

        this.sortCriteria = 0;
        this.updateSelection();
    };

    checkboxChanged = (e) => {
        this.selection[Number(e.target.id)] = e.target.checked;
        this.updateSelection();
    }

    onSortChange = (e) => {
        this.sortCriteria = Number(e.target.value);
        this.updateSelection();
    }


    updateSelection = () => {

        this.resultsData = [];
        for (var i = 0; i < products.length; i++) {
            if ((products[i].productType == "maillot" && this.selection[0]) || (products[i].productType == "crampons" && this.selection[1]) ||
                (products[i].productType == "gants" && this.selection[2]) || (products[i].productType == "ballon" && this.selection[3]) ||
                (products[i].productType == "autre" && this.selection[4])) {


                if ((products[i].price <= 20 && this.selection[5]) || (products[i].price >= 20 && products[i].price <= 50 && this.selection[6]) ||
                    (products[i].price >= 50 && products[i].price <= 100 && this.selection[7]) || (products[i].price >= 100 && this.selection[8])) {

                    if ((products[i].location.includes("Ottawa") && this.selection[9]) || (products[i].location.includes("Gatineau") && this.selection[10]) ||
                        (products[i].location.includes("Hamilton") && this.selection[11])) {

                        if ((products[i].season == "2023" && this.selection[12]) || (products[i].season == "2022" && this.selection[13]) ||
                            (products[i].season == "2021" && this.selection[14])) {

                            this.resultsData.push(products[i]);
                        }

                    }

                }
            }
        }

        if (this.sortCriteria == 0) {
            this.resultsData.sort((a, b) => a.title.localeCompare(b.title))
        }
        else if (this.sortCriteria == 1) {
            this.resultsData.sort((a, b) => Number(a.price) - Number(b.price))
        }
        else {
            this.resultsData.sort((a, b) => a.season.localeCompare(b.season))
        }

        this.results = []
        var n = 0;

        while (n < this.resultsData.length) {
            var line = [];
            for (var i = n; i < n + 4; i++) {

                if (i == this.resultsData.length) {
                    break;
                }

                const iStr = this.resultsData[i].id.toString();

                line.push(<div className="product-landing" style={{ marginLeft: "10px" }} >
                    <div style={{ width: "100%", height: "61%", padding: "10px", backgroundColor: "#f6f6f6", borderRadius: "10px 10px 0px 0px" }}>
                        <img className="img-product" id="image" src={require(`../../assets/products/${iStr}.png`)} /></div>
                    <div className="product-dets">
                        <strong>{this.resultsData[i].title}</strong>
                        <div>{this.resultsData[i].price}$</div>
                        <div><a class="simple-link" href={`/product?id=${iStr}`}>Voir les locations</a></div>
                    </div>
                </div>);
            }

            this.results.push(<div style={{ marginTop: "25px", display: "flex", flexDirection: "row" }}> {line} </div>)

            n += line.length;
        }


        this.forceUpdate();

    }



    render() {
        return (
            <div style={{ backgroundColor: "#0a0927" }}>

                <div style={{ width: "100%" }}>
                    <div style={{ margin: "auto", width: "95%", backgroundColor: "#ffffff", padding: "45px 0px 0px" }}>

                        <div style={{ margin: "15px auto auto auto", width: "50%", textAlign: "center" }}>
                            <h2><strong>Marchandise</strong></h2>
                        </div>

                        <div style={{ width: "100%", marginTop: "50px" }}>

                            <div style={{ backgroundColor: "#f2f2f2", width: "100%" }}>

                                <div style={{ width: "90%", margin: "auto" }}>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                                        <div className="explore-panel" style={{ width: "20%", backgroundColor: "white", margin: "25px" }}>

                                            <div style={{ margin: "16px" }}>
                                                <div><strong>Type</strong></div>

                                                <div class="form-check" style={{ marginTop: "6px" }}>
                                                    <input class="form-check-input" type="checkbox" value="" id="0" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                <label class="form-check-label" for="0">
                                                    Maillots
                                                     </label>
                                            </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="1" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                <label class="form-check-label" for="1">
                                                    Crampons
                                                        </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="2" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="2">
                                                        Gants
                                                        </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="3" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="3">
                                                        Ballons
                                                        </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="4" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="4">
                                                        Autres
                                                        </label>
                                                </div>






                                                <hr/>

                                                <div style={{ marginTop: "0px" }}><strong>Prix</strong></div>

                                                <div class="form-check" style={{ marginTop: "6px" }}>
                                                    <input class="form-check-input" type="checkbox" value="" id="5" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="5">
                                                        10$ - 20$
                                                     </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="6" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="6">
                                                        20$ - 50$
                                                        </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="7" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="7">
                                                        50$ - 100$
                                                        </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="8" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="8">
                                                        {">100$"}
                                                        </label>
                                                </div>





                                                <hr />

                                                <div style={{ marginTop: "0px" }}><strong>Location du magasin</strong></div>

                                                <div class="form-check" style={{ marginTop: "6px" }}>
                                                    <input class="form-check-input" type="checkbox" value="" id="9" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="9">
                                                        Ottawa
                                                     </label>
                                                </div>
   

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="10" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="10">
                                                        Gatineau
                                                        </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="11" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="11">
                                                        Hamilton
                                                    </label>
                                                </div>






                                                <hr />

                                                <div style={{ marginTop: "0px" }}><strong>Saison</strong></div>

                                                <div class="form-check" style={{ marginTop: "6px" }}>
                                                    <input class="form-check-input" type="checkbox" value="" id="12" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="12">
                                                       2022/2023
                                                     </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="13" onChange={this.checkboxChanged} defaultChecked="true"/>
                                                    <label class="form-check-label" for="13">
                                                        2021/2022
                                                        </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="14" onChange={this.checkboxChanged} defaultChecked = "true" />
                                                    <label class="form-check-label" for="14">
                                                        2020/2021
                                                        </label>
                                                </div>
                                                </div>

                                </div>

                                        <div style={{ width: "75%", margin: "25px" }}>
                                            <div style={{ textAlign: "center", fontSize: "20px" }}><strong>{this.resultsData.length} r&#233;sultats  trouv&#233;s</strong></div>

                                            <div style={{ width: "100%", textAlign: "right", marginTop: "-25px" }}>
                                                <div style={{ display: "flex", flexDirection: "row", marginRight: "5px" }}>

                                                    <div style= {{width: "70%"}}></div>

                                                    <div style={{ width: "30%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                                        Trier par :
                                                    <select style={{ width: "105px", height: "35px", marginLeft: "5px", marginTop: "-5px" }} class="form-select" aria-label="Trier"
                                                            onChange={ this.onSortChange}>
                                                    <option value="0">Nom</option>
                                                    <option value="1">Prix</option>
                                                    <option value="2">Saison</option>
                                                            </select>
                                                            </div>
                                                </div></div>

                                            {this.results}

                                </div>

                                    </div>

                                </div>

                                </div>

                            
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
export default Merchandise;