import React, { Component } from "react";
import queryString from 'query-string';
import { products } from '../../data/Products'


class Product extends Component {

    constructor() {
        super();

        if (!(Object.keys(queryString.parse(window.location.search)).length === 0) && !(queryString.parse(window.location.search).id == null)) {
            var id = Number(queryString.parse(window.location.search).id);

            this.img = <img src={require(`../../assets/products/${id}.png`)} />
            this.title = products[id].title;
            this.price = products[id].price;

            this.location = [];
            for (var i = 0; i < products[id].location.length; i++) {
                if (products[id].location[i] == "Ottawa") {
                    this.location.push(<div style={{ marginTop: "4px" }}>&#8226; Ottawa (450, Woods Avenue)</div>);
                }
                else if (products[id].location[i] == "Gatineau") {
                    this.location.push(<div style={{ marginTop: "4px" }}>&#8226; Gatineau (25, Lelac Street)</div>);
                }
                else {
                    this.location.push(<div style={{ marginTop: "4px" }}>&#8226; Hamilton (46, Stones Boulevard)</div>);
                }
            }

            if (products[id].season == "2023") {
                this.season = "2022/2023"
            }
            else if (products[id].season == "2022") {
                this.season = "2021/2022"
            }
            else {
                this.season = "2020/2021"
            }

        }
        else {
            window.open("/", "_self");
        }
    };



  render() {
      return (
          <div style={{ backgroundColor: "#0a0927" }}>

              <div style={{ width: "100%" }}>
                  <div style={{ margin: "auto", width: "95%", backgroundColor: "#ffffff", padding: "45px 20px 61px" }}>
                      <div style={{ margin: "15px auto auto auto", width: "50%", textAlign: "center" }}>
                          <h2><strong>{this.title}</strong></h2>
                      </div>

                      <div style={{ margin: "35px auto auto auto", width: "90%" }}>
                          <div style={{ textAlign: "center" }}>{this.img}</div>

                          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                              <div>
                          <div style={{ marginTop: "50px" }}><strong>Prix : </strong>{this.price}$</div>
                                  <div style={{ marginTop: "10px" }} ><strong>Saison : </strong>{this.season}</div>
                                  <div style={{ marginTop: "10px" }} ><strong>Ce produit est disponible dans nos boutiques suivantes :</strong></div>
                                  {this.location}
                                  </div>
                              </div>
                      </div>

                  </div>
              </div>

          </div>
      );
  }
}
export default Product;