import React, { Component } from "react";
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from "react-router-dom";
import queryString from 'query-string';

class Navbar extends Component {

    constructor() {
        super();

        this.followText = <>SUIVEZ OTTAWA ST SUR</>;
        this.newsText = <>NOUVELLES</>;
        this.calendarText = <>CALENDRIER</>;
        this.marchandiseText = <>MARCHANDISE</>;
        this.ticketsText = <>BILLETS</>;
        this.langButton = <a className="btn btn-outline-dark" style={{
            marginRight: "5px", backgroundColor: "#0a0927", borderColor: "#9d9da0", color: "#9d9da0",
            borderWidth: "2px", borderRadius: "14px", fontSize: "15px"
        }}
            href="/?lang=en"><strong>ENGLISH</strong></a>


        if (!(Object.keys(queryString.parse(window.location.search)).length === 0) && !(queryString.parse(window.location.search).lang == null) &&
            queryString.parse(window.location.search).lang == "en") {

            this.followText = <>FOLLOW OTTAWA ST ON</>;
            this.newsText = <>NEWS</>;
            this.calendarText = <>CALENDAR</>;
            this.marchandiseText = <>MERCHANDISE</>;
            this.ticketsText = <>TICKETS</>;
            this.langButton = <a className="btn btn-outline-dark" style={{
                marginRight: "5px", backgroundColor: "#0a0927", borderColor: "#9d9da0", color: "#9d9da0",
                borderWidth: "2px", borderRadius: "14px", fontSize: "15px"
            }}
                href="/"><strong>FRANCAIS</strong></a>

        }

    };

  render() {
    return (
        <div style={{backgroundColor: "#0a0927" }}>

            <div class="topnav">
                <div className="logo-container">
                    <a className="logo-link" href="/">
                        <img className="logo" src={require('../../assets/logo.PNG')} />
                    </a>
                </div>

                <div className="vr-line"></div>

                <div style={{ width:"100%"}}>
                    <div className="social-media">
                        <div className="social-media-text"><strong className="follow-text" style={{ textAlign: "center" }}>{this.followText}</strong><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <div style={{ fontSize: "24px", paddingTop: "4px" }}><FaFacebookSquare /><span>&nbsp;&nbsp;</span><FaTwitter /><span>&nbsp;&nbsp;</span><FaInstagram />
                                <span>&nbsp;&nbsp;</span> <FaYoutube /><span>&nbsp;&nbsp;</span><FaWhatsapp /> </div>

                            <div style={{ margin: "auto" }}>{this.langButton}</div>
                        </div>
                        </div>


                    <div className="hr-line"></div>
                    <div className="link-container">
                        <a className="topnav-link" href="/news?page=1"><strong>{this.newsText}</strong></a>
                        <div className="vr-line"></div>
                        <a className="topnav-link" href="/calendar"><strong>{this.calendarText}</strong></a>
                        <div className="vr-line"></div>
                        <a className="topnav-link" href="/merchandise"><strong>{this.marchandiseText}</strong></a>
                        <div className="vr-line"></div>
                        <a className="topnav-link" href="/tickets"><strong>{this.ticketsText}</strong></a>
                    </div>
                    </div>
            </div>

      </div>
    );
  }
}
export default Navbar;
