import React from "react";

class Home extends React.Component {

    state = {
        text: []
    };


    loopText1 = () => {

        const text1 = "Full-Stack Web Developer with business leadership and coding skills."
        const textArr1 = text1.split("");
        let renderArr1 = [];

        for (let i = 0; i < textArr1.length; i++) {
            setTimeout(function () {
                renderArr1.push(textArr1[i]);
                document.getElementById("homeBody1").innerHTML = (renderArr1.join(""));
            }, 50 * i);
        }      
    }

    loopText2 = () => {

        const text2 = "Seeking opportunity to add value to your organization."
        const textArr2 = text2.split("");
        let renderArr2 = [];

        for (let i = 0; i < textArr2.length; i++) {
            setTimeout(function () {
                renderArr2.push(textArr2[i]);
                document.getElementById("homeBody2").innerHTML = (renderArr2.join(""));
            }, 50 * i);
        }
    }


    loopText3 = () => {

        const text3 = "Coding savvy. Corporate maturity. Granville Sims."
        const textArr3 = text3.split("");
        let renderArr3 = [];

        for (let i = 0; i < textArr3.length; i++) {
            setTimeout(function () {
                renderArr3.push(textArr3[i]);
                document.getElementById("homeBody3").innerHTML = (renderArr3.join(""));
            }, 50 * i);
        }
    }

allText = () => {

    setTimeout(this.loopText1, 1000);
    setTimeout(this.loopText2, 4400);
    setTimeout(this.loopText3, 9100);
}

componentDidMount(){
    this.allText();
  }


    render() {
        return (
            <div>
                <h1> Home Page </h1>
                <div id="homeBody1" className="text-center"></div>
                <div id="homeBody2" className="text-center"></div>
                <div id="homeBody3" className="text-center"></div>


            </div >
        );

    }
}

export default Home;