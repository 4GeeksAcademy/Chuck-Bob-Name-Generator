/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let exten = [".us", ".com", ".org", ".net"];
  let names = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of exten) {
          console.log(p + a + n + e);
          document.querySelector(".mt-5").innerHTML +=
            "<h2>" + p + a + n + e + "</h2>";
          //   names.push(p + a + n + e);
        }
      }
    }
  }

  // document.querySelector(".mt-5").innerHTML = "<h2>" + names + "</h2>";
};
