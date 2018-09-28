import React, { Component } from "react";
import "../css/Home.css";
import NavBar from "./NavBar";
import BigWatch from "./BigWatch";
class Home extends Component {
    constructor(props) {
        super(props);
        //    this.state = {
        //       title: {
        //           left: 0
        //       },
        //       width: window.innerWidth
        //    }


    }

    componentDidMount() {

        // let move = setInterval(()=>{
        //     this.setState({
        //         title: {
        //             left: this.state.title.left + 1
        //         }
        //     })
        //     if(this.state.title.left === this.state.width -70){
        //         clearInterval(move);
        //     }
        // }, 10)


    }

    render() {

        return (
            <div className="container-fluid">
            <NavBar isHome = {true}/>
                <div className="row brand-statement-container">
                    <div className="brand-statement col-4">The Ultimate symbol of style and sophistication, our collection of mens's designer watch
                      brands have been chosen to showcase innovative design, cutting edge technology and the latest on-trend materials.
                    </div>
                    <div className="slideShow col-8">
                        <img className="watch1" src={require("../images/seamaster.png")} alt="watch" />
                        <img className="watch2" src={require("../images/SewIz.png")} alt="watch" />
                        <img className="watch3" src={require("../images/nixon1.png")} alt="watch" />
                       
                    </div>
                </div>
                <div className="line1 container-fluid"></div>
                <br/>
                <BigWatch/>
                <br/>
                <div className="line1 container-fluid"></div>
            </div>
        )
    }
}

export default Home;