import React, { Component } from 'react'
import {InfoConsumer} from '../Context';
import $ from 'jquery';
import { Link } from 'react-router-dom';


 class Info extends Component {
     componentDidMount () {
         $(document).ready(function() {
            $('.col-lg-4').hover(
                function() {    // trigger on mouse over
                    $(this).animate({
                        marginTop: "-=0.3%",      
                    },50)
                },
                // how long animation will run
            // on hover out
            function() {
                $(this).animate({
                    marginTop: "0%"
                },50)
            }
            );

         });

     }


    render() {

 const {
     id,
     headerTitle,
     headerSubTitle,
     headerText,
     img

 } = this.props.item;



        return (
            <InfoConsumer>
                { data  =>  (
                     <div className="col-10 col-lg-4 mx-auto mb-5 ">
                     <div className="card mx-auto" style= {{ width:'18rem'}}>
                         <img className="card-img-top" src={img}></img>
                         <div className="card-body">
                             <h3 className="card-title text-uppercase">{headerTitle}</h3>
                             <h5 className="card-title">{headerSubTitle}</h5>
                             <p className="card-text">{headerText}</p>
                            <Link
                            to="/details"
                            className="btn btn-outline-primary text-uppercase"
                            >
                                More Info
                            </Link>
                         </div>
                     </div>
                 </div>

                ) 
                }
            </InfoConsumer>
        )
            }
        
        }
    
export default Info;