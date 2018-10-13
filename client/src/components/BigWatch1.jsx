import React from "react";
import "../css/BigWatch.css";
import { connect } from "react-redux";
import { updateSeconds, updateMinutes, updateHours } from "../redux/actions";

const mapStateToProps = state => {
    return { time: state.time }
};
const mapDispatchToProps = dispatch => {
    return {
        updateSeconds: sec => dispatch(updateSeconds(sec)),
        updateMinutes: min => dispatch(updateMinutes(min)),
        updateHours: hour => dispatch(updateHours(hour))
    }
};

const Watch = (props) => {
    const { time, updateSeconds, updateMinutes, updateHours } = props;
    let date;
    let secs;
    let mins;
    let hours;
    let sHours;


    setInterval(() => {
        date = new Date();
        secs = date.getSeconds();
        hours = date.getHours();
        mins = date.getMinutes();
        //convert the content of the variable 'hours' to 12 hour format
        sHours = hours;
        if (hours > 12) {
            sHours = hours - 12;
        }
        updateSeconds(secs * 6)   //the parameter for the update function is the time(eg: secs) multiplied by the specified number in degrees
        updateMinutes(mins * 6)
        updateHours(sHours * 30)
    }, 1000)



    return (
        <div className="container-fluid">
            <div className="big-watch-container row">
                <div className='text col-lg-4'>Discover Our Collection Made By The Most Experienced Watchmakers</div>
                <div className="watch float-lg-left col-lg-8">
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
                        <div className="secondHand" style={{ transform: 'rotate(' + time.rotateSecondHand + 'deg)' }}></div>
                        <div className="minuteHand" style={{ transform: 'rotate(' + time.rotateMinuteHand + 'deg)' }}></div>
                        <div className="hourHand" style={{ transform: 'rotate(' + time.rotateHourHand + 'deg)' }}></div>
                    </div>

                </div>

            </div>
        </div>
    )
}
const BigWatch = connect(mapStateToProps, mapDispatchToProps)(Watch);
export default BigWatch;