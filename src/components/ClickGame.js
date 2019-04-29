import React, { Component } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Heading from "./Heading";
import images from "../images";
import { Z_FILTERED } from "zlib";
import { stat } from "fs";

class ClickGame extends Component       { state = {
            score: 0,
            highScore: 0,
// storing class value and assigning to navMessageColor
            navMessageColor: "",

// 
            navMessage: "Begin, by clicking an image!",

            allLetters: this.filterArray(),

            wasClicked: [],

            shake: false
    };

    clickEvent = this.checkedClicked.bind(this);

    filterArray = () {

        const newArr = images.slice();

        const filterArray = [];

        while (newArr.length > 0) {
            filterArray.push(newArr.splice(Math.random() * newArr.length), 1)[0];
        
        return filterArray;

      }
        
        checkedClicked(clickedBox) {

            const prevState = this.state.wasClicked.slice();

            let score = this.state.score;
            let highScore = this.state.highScore;

            if (!this.state.wasClicked.includes(clickedBox)) {
                if (score === highScore) {
                    score++;
                    highScore++;

                } else {
                    score++;

                }

              prevState.push(clickedBox);

          }
          if (this.state.didClicked.include(clickedBox)) {
              let score = 0;
              return this.setState({
                  score: score,
                  highScore: highScore,
                  navMessageColor: "incorrect",
                  navMessage: "Incorrect",
                  allLetters: filter,
                  didClicked: [],
                  shake: true
              });

            }

            this.setState({
                score: score,
                highScore:  highScore,
                navMessageColor: "correct",
                navMessage: "You're Correct!",
                allLetters: filter,
                didClicked: prevState,
                shake: false
            });
        return setTimeout(() => this.setState({ navMessageColor: "" }), 500);
        }
        render() {
            const state = this.state;
            return (
                <div >
                    <Navbar
                        score={state.score}
                        highScore={state.highScore}
                        navMessage={state.navMessage}
                        navMessageColor={state.navMessageColor}
                    />
                    <Heading />
                    <Card
                        shake={state.shake}
                        letters={state.allLetters}
                        clickEvent={this.clickEvent}
                    />
                    <Footer />
                </div>
            
            );
        }
    


export default ClickGame;

