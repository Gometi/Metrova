import React, { Component } from "react";
import "../css/BigWatch.css";

class BigWatch extends Component{
    constructor(){
        super()
        this.state = {
            rotateSecondHand: 90,
            rotateMinuteHand: 0,
            rotateHourHand: 0
        }
    }
    componentDidMount(){

        setInterval(() => {
            let time = new Date();
            let hours = time.getHours();
            let mins = time.getMinutes();
            let secs = time.getSeconds();
            //convert the content of the variable 'hours' to 12 hour format
            let sHours = hours;
            if (hours > 12) {
                sHours = hours - 12;
            }
            //rotate the second, minute and the hour hand by the specified number of degrees
            this.setState({
                rotateSecondHand: 6 * secs,
                rotateMinuteHand: 6 * mins,
                rotateHourHand: 30 * sHours
            })
        }, 1000);

    }
    render(){
        return(
            <div className="container-fluid">
                <div className="big-watch-container row">
                    <div className='text col-4'>Discover Our Collection Made By The Most Experienced Watchmakers</div>
                    <div className="col-8">
                    <div className="big-watch">
                            <img src={require('../images/ModernSport05.jpg')} alt="watch" />
                            <div className="center"></div>
                            <div className="middle"></div>
                            <div className="no2 number" >02</div>
                            <div className="no4 number" >04</div>
                            <div className="no8 number" >08</div>
                            <div className="no10 number" >10</div>
                            <div className="no1 no-number" ></div>
                            <div className="no3 no-number" ></div>
                            <div className="no5 no-number" ></div>
                            <div className="no7 no-number" ></div>
                            <div className="no9 no-number" ></div>
                            <div className="no11 no-number" ></div>
                            <div className="no12 no-number" ></div>
                            <div className="no6 no-number" ></div>
                            <div className="secondHand" style={{transform: 'rotate('+ this.state.rotateSecondHand +'deg)'}}></div>
                            <div className="minuteHand" style={{ transform: 'rotate(' + this.state.rotateMinuteHand + 'deg)' }}></div>
                            <div className="hourHand" style={{ transform: 'rotate(' + this.state.rotateHourHand + 'deg)' }}></div>
                    </div>
                        
                    </div>
                   
                </div>
            </div>
        )
    }
}
export default BigWatch;