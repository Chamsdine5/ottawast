import React, { Component } from "react";
import { news } from '../../data/News'
import queryString from 'query-string';

class News extends Component {


    constructor() {
        super();

        if (!(Object.keys(queryString.parse(window.location.search)).length === 0)) {
            if (!(queryString.parse(window.location.search).page == null)) {

                var page = queryString.parse(window.location.search).page;
                this.news = [];

                var a = 14;
                var b = 9;

                if (page == 1) {
                    this.pagesLinks = <div style={{ marginTop: "40px", textAlign: "center" }}>Pages<span>&nbsp;&nbsp;</span> 1<span>&nbsp;&nbsp;</span>
                        <a href="/news?page=2">2</a> <span>&nbsp;&nbsp;</span>
                        <a href="/news?page=3">3</a>
                    </div>
                }

                else if (page == 2) {
                    a = 8;
                    b = 3;

                    this.pagesLinks = <div style={{ marginTop: "40px", textAlign: "center" }}>Pages<span>&nbsp;&nbsp;</span> <a href="/news?page=1">1</a><span>&nbsp;&nbsp;</span>
                        2 <span>&nbsp;</span>
                        <a href="/news?page=3">3</a>
                    </div>
                }
                else {
                    a = 2;
                    b = 0;

                    this.pagesLinks = <div style={{ marginTop: "40px", textAlign: "center" }}>Pages<span>&nbsp;&nbsp;</span> <a href="/news?page=1">1</a><span>&nbsp;&nbsp;</span>
                        <a href="/news?page=2">2</a><span>&nbsp;&nbsp;</span>
                        3
                    </div>
                }

                    for (var i = a; i >= b; i--) {
                        const i_ = i;
                        const pathImg = i_.toString();

                        this.news.push(<div style={{ height: "200px", display: "flex", flexDirection: "row", marginTop: "30px" }}>
                            <img src={require(`../../assets/news/${pathImg}.jpg`)} />
                            <div style={{ marginLeft: "27px" }}>
                                <strong style={{ marginTop: "15px", fontSize: "25px" }}><a class="simple-link" href={`/article?id=${pathImg}`}>
                                    {news[i_].title}</a></strong>
                                <p style={{ marginTop: "10px" }}>{news[i_].description}</p>
                            </div>
                        </div>)

  
                }
            }
            else {
                window.open("/", "_self");
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
                        <h2><strong>Actualit&#233;s sur Ottawa ST</strong></h2>
                    </div>

                    <div style={{ margin: "0px 15px 0px 15px" }}>
                        <div style={{ marginTop: "40px" }}></div>

                        {this.news}

                    </div>

                    {this.pagesLinks}

                </div>
            </div>

      </div>
    );
  }
}
export default News;