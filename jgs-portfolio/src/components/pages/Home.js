import React from "react";

class Home extends React.Component {

    state = {
        text: []
    };





    loopText = () => {

        const textBody = "Here I am.";
        const textArr = textBody.split("");
        let renderArr = [];


        for (let i = 0; i < textArr.length; i++) {

            // setTimeout(function () {

            setTimeout = () => {


                console.log(textArr[i]);

                renderArr.push(textArr[i]);

                console.log(renderArr);

                this.setState({ text: renderArr });
            }, 100 * i);
        }

    }






    render() {
        return (
            <div>
                <h1> Home Page </h1>
                <p><button onClick={this.loopText}>Click</button></p>
                <p>{this.state.text}</p>
            </div >
        );

    }
}

export default Home;