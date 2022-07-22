import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SiNike } from 'react-icons/si'
import { SiHonda } from 'react-icons/si'
import { RiVisaFill } from 'react-icons/ri'
import { news } from '../../data/News'
import { products } from '../../data/Products'
import queryString from 'query-string';

class Landing extends Component {


    constructor() {
        super();
        this.news = news;
        this.products = products;

        this.welcomeImg = <img style={{ width: "100%" }} id="image" src={require('../../assets/landing.jpg')} />;

        this.welcomeText = <>Bienvenue Sur Le Site Officiel De Ottawa ST</>;
        this.nextMatchText = <>Prochain Match</>;
        this.nextMatchDetsText = <>Le 15 Aout 2022 contre Toronto FC</>;
        this.buyTicketsText = <>Acheter des billets</>;

        this.lastNewsText = <>Derni&#232;res Nouvelles</>;
        this.seeNewsText = <>Consulter l&rsquo;actualit&#233;</>;
        this.news14Text = this.news[14].title;
        this.news13Text = this.news[13].title;
        this.news12Text = this.news[12].title;
        this.news11Text = this.news[11].title;


        this.shopText = <>Notre Boutique</>
        this.seeProductsText = <>Voir les produits</>;
        this.product0PriceText = <>{this.products[0].price}$</>;
        this.product1PriceText = <>{this.products[1].price}$</>;
        this.product2PriceText = <>{this.products[2].price}$</>;
        this.product3PriceText = <>{this.products[3].price}$</>;

        this.seeLocationsText = <>Voir les locations</>;
        this.jerseyImg = <img style={{ marginTop: "60px", width: "100%" }} id="image" src={require('../../assets/jersey_landing.png')} />;
        this.getText = <>Obtenir</>;
        this.quizText = <>Connaissez-vous Ottawa ST ? Testez vos connaissances avec ce petit quiz.</>

        this.sponsorsText = <>PARTENAIRES PRINCIPAUX</>


        if (!(Object.keys(queryString.parse(window.location.search)).length === 0) && !(queryString.parse(window.location.search).lang == null) &&
            queryString.parse(window.location.search).lang == "en") {

            this.welcomeImg = <img style={{ width: "100%" }} id="image" src={require('../../assets/landingEN.jpg')} />

            this.welcomeText = <>Welcome To The Official Site Of Ottawa ST</>;
            this.nextMatchText = <>Next Match</>;
            this.nextMatchDetsText = <>August 15, 2022 against Toronto FC</>;
            this.buyTicketsText = <>Buy tickets</>;

            this.lastNewsText = <>Last News</>;
            this.seeNewsText = <>Consult the news</>;
            this.news14Text = this.news[14].titleEN;
            this.news13Text = this.news[13].titleEN;
            this.news12Text = this.news[12].titleEN;
            this.news11Text = this.news[11].titleEN;

            this.shopText = <>Our Shop</>
            this.seeProductsText = <>See products</>;
            this.product0PriceText = <>${this.products[0].price}</>;
            this.product1PriceText = <>${this.products[1].price}</>;
            this.product2PriceText = <>${this.products[2].price}</>;
            this.product3PriceText = <>${this.products[3].price}</>;

            this.seeLocationsText = <>See locations</>;
            this.jerseyImg = <img style={{ marginTop: "60px", width: "100%" }} id="image" src={require('../../assets/jersey_landingEN.png')} />;
            this.getText = <>Get it Now</>;
            this.quizText = <>Do you know Ottawa ST? Test your knowledge with this short quiz.</>

            this.sponsorsText = <>MAIN PARTNERS</>

        }

    };

    obtainJersey = (e) => {
        window.location.href = "/product?id=20";
    }

    quiz = (e) => {
        window.location.href = "/quiz";
    }

  render() {
    return (
        <div style={{ backgroundColor: "#0a0927" }}>

            {this.welcomeImg}


            <div style={{ width: "100%" }}>
                <div style={{ margin: "auto", width: "95%", backgroundColor: "#ffffff", padding: "45px 20px 61px" }}>
                    <div style={{ margin: "45px auto auto auto", width: "50%", textAlign: "center" }}>
                        <h2><strong>{this.welcomeText}</strong></h2>
                    </div>

                    <p style={{ width: "75%", margin: "15px auto auto auto", textAlign: "center" }}>
                        <strong>{this.nextMatchText}</strong> {this.nextMatchDetsText}
            </p>
                    <div style={{ marginTop: "15px", width: "100%", textAlign: "center" }}><a className="topnav-link btn btn-primary" style={{ backgroundColor: "#1b4081", borderColor: "#1b4081" }}
                        href="tickets?id=0&month=0&step=2">{this.buyTicketsText}</a></div>

                    <hr style={{ opacity: "25%", width: "115%", margin: "40px 0px 0px -50px" }} />

                    <div style={{ margin: "45px auto auto auto", width: "50%", textAlign: "center" }}>
                        <h2><strong>{this.lastNewsText}</strong></h2>
                    </div>
                    <div style={{ width: "100%", textAlign: "right", marginTop: "-25px" }}>
                        <div style={{ marginRight: "5px" }}><a className="topnav-link btn btn-primary" style={{ marginRight: "5px", backgroundColor: "#1b4081", borderColor: "#1b4081" }}
                            href="/news?page=1">{this.seeNewsText}</a>
                    </div></div>

                    <div style={{ marginTop: "17px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className="news" >
                            <div style={{ width: "100%", height: "70%" }}><img className="img-news" id="image" src={require('../../assets/news/14.jpg')} /></div>
                            <div style={{ width: "100%", height: "30%", textAlign: "center" }}><strong style={{ marginTop: "15px" }}><a class="simple-link" href="/article?id=14">
                                {this.news14Text}</a></strong></div>
                        </div>
                        <div className="news" >
                            <div style={{ width: "100%", height: "70%" }}><img className="img-news" id="image" src={require('../../assets/news/13.jpg')} /></div>
                            <div style={{ width: "100%", height: "30%", textAlign: "center" }}><strong style={{ marginTop: "15px" }}><a class="simple-link" href="/article?id=13">
                                {this.news13Text}</a></strong></div>
                        </div>
                        <div className="news" >
                            <div style={{ width: "100%", height: "70%" }}><img className="img-news" id="image" src={require('../../assets/news/12.jpg')} /></div>
                            <div style={{ width: "100%", height: "30%", textAlign: "center" }}><strong style={{ marginTop: "15px" }}><a class="simple-link" href="/article?id=12">
                                {this.news12Text}</a></strong></div>
                        </div>
                        <div className="news" >
                            <div style={{ width: "100%", height: "70%" }}><img className="img-news" id="image" src={require('../../assets/news/11.jpg')} /></div>
                            <div style={{ width: "100%", height: "30%", textAlign: "center" }}><strong style={{ marginTop: "15px" }}><a class="simple-link" href="/article?id=11">
                                {this.news11Text}</a></strong></div>
                        </div>
                    </div>

                    <hr style={{ opacity: "25%", width: "115%", margin: "40px 0px 0px -50px" }} />


                    <div style={{ margin: "45px auto auto auto", width: "50%", textAlign: "center" }}>
                        <h2><strong>{this.shopText}</strong></h2>
                    </div>
                    <div style={{ width: "100%", textAlign: "right", marginTop: "-25px" }}>
                        <div style={{ marginRight: "5px" }}><a className="topnav-link btn btn-primary" style={{ marginRight: "5px", backgroundColor: "#1b4081", borderColor: "#1b4081" }}
                            href="/merchandise">{this.seeProductsText}</a>
                        </div></div>

                    <div style={{ marginTop: "17px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className="product-landing" >
                            <div style={{ width: "100%", height: "61%", padding: "10px", backgroundColor: "#f6f6f6", borderRadius: "10px 10px 0px 0px" }}>
                                <img className="img-product" id="image" src={require('../../assets/products/0.png')} /></div>
                            <div className="product-dets">
                                <strong>{this.products[0].title}</strong>
                                <div>{this.product0PriceText}</div>
                                <div><a class="simple-link" href="/product?id=0">{this.seeLocationsText}</a></div>
                            </div>
                        </div>
                        <div className="product-landing" >
                            <div style={{ width: "100%", height: "61%", padding: "10px", backgroundColor: "#f6f6f6", borderRadius: "10px 10px 0px 0px" }}>
                                <img className="img-product" id="image" src={require('../../assets/products/1.png')} /></div>
                            <div className="product-dets">
                                <strong>{this.products[1].title}</strong>
                                <div>{this.product1PriceText}</div>
                                <div><a class="simple-link" href="/product?id=1">{this.seeLocationsText}</a></div>
                            </div>
                        </div>
                        <div className="product-landing" >
                            <div style={{ width: "100%", height: "61%", padding: "10px", backgroundColor: "#f6f6f6", borderRadius: "10px 10px 0px 0px" }}>
                                <img className="img-product" id="image" src={require('../../assets/products/2.png')} /></div>
                            <div className="product-dets">
                                <strong>{this.products[2].title}</strong>
                                <div>{this.product2PriceText}</div>
                                <div><a class="simple-link" href="/product?id=2">{this.seeLocationsText}</a></div>
                            </div>
                        </div>
                        <div className="product-landing" >
                            <div style={{ width: "100%", height: "61%", padding: "10px", backgroundColor: "#f6f6f6", borderRadius: "10px 10px 0px 0px" }}>
                                <img className="img-product" id="image" src={require('../../assets/products/3.png')} /></div>
                            <div className="product-dets">
                                <strong>{this.products[3].title}</strong>
                                <div>{this.product3PriceText}</div>
                                <div><a class="simple-link" href="/product?id=3">{this.seeLocationsText}</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="img_container">
                        {this.jerseyImg}
                        <button className="jersey-button topnav-link btn btn-primary" style={{ width: "129px", height: "55px", backgroundColor: "#1b4081", borderColor: "#1b4081" }}
                            onClick={this.obtainJersey}>
                            {this.getText} </button>
                    </div>

                    <hr style={{ opacity: "25%", opacity: "25%", width: "115%", margin: "40px 0px 0px -50px" }} />

                    <div style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}>
                        <div style={{ width: "25%" }}><img style={{ width: "190px", marginLeft: "25px" }} id="image" src={require('../../assets/quiz.png')} /></div>
                        <div style={{ margin: "auto", fontSize: "25px", width: "60%" }}>{this.quizText}</div>
                        <div style={{ width: "15%", margin: "auto", textAlign: "center" }}><button className="btn btn-primary" style={{ backgroundColor: "#1b4081", borderColor: "#1b4081",
                            width: "90px", height: "50px"}}
                            onClick={this.quiz}>
                            Quiz </button></div>
                    </div>

                    <hr style={{ opacity: "25%", opacity: "25%", width: "115%", margin: "40px 0px 0px -50px" }} />

                    <div style={{ margin: "45px auto auto auto", width: "100%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><strong style={{ fontSize: "21px" }}>{this.sponsorsText}</strong></div>
                        <div className="vr-line" style={{ height: "47px", marginTop: "32px", marginLeft: "27px" }}></div>
                        <div style={{ fontSize: "61px", marginBottom: "21px", marginLeft: "28px" }}><SiNike /><span>&nbsp;&nbsp;</span><RiVisaFill /><span>&nbsp;&nbsp;</span><SiHonda /></div>
                    </div>

                </div>
            </div>

      </div>
    );
  }
}
export default Landing;