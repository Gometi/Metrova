import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

import "../css/BrandSlideShow.css";


class BrandSlideShow extends Component{
   constructor(props){
       super(props)
       this.state = {activeIndex: 0}
       this.next = this.next.bind(this);
   }

   next(){
      const nextIndex = this.state.activeIndex === 0? 1 : 0;
      this.setState({activeIndex: nextIndex});
   }

   render(){
       return(
           <div>
               <Link className="link" to={this.props.brand[this.state.activeIndex].link}>
               <Card className="brand text-dark shadow m-4" >
                   <CardImg className="img-fluid" top width="100%" src={this.props.brand[this.state.activeIndex].src} style={{height: 300 }} alt={this.props.brand[this.state.activeIndex].altText} />
                   <CardBody>
                       <CardTitle className="brand-title">{this.props.brand[this.state.activeIndex].title}</CardTitle>
                       <CardText className="brand-text">{this.props.brand[this.state.activeIndex].text}</CardText>
                   </CardBody>
               </Card>
               </Link>
               <Button className="button-left" onClick={this.next}>Next</Button>
           </div>
       )
   }
}

export default BrandSlideShow;