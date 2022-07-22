import React, { Component } from "react";
import queryString from 'query-string';
import { news } from '../../data/News'


class Article extends Component {

    constructor() {
        super();

        if (!(Object.keys(queryString.parse(window.location.search)).length === 0)) {
            if (!(queryString.parse(window.location.search).id == null)) {

                var id = queryString.parse(window.location.search).id;
                this.title = news[id].title;
                this.content = news[id].content;
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
                          <h2><strong>{this.title}</strong></h2>
                      </div>

                      <div style={{ margin: "35px auto 500px auto", width: "90%" }}>
                          {this.content}
                      </div>

                  </div>
              </div>

          </div>
      );
  }
}
export default Article;