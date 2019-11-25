import React, { Component } from 'react'
import { InfoConsumer } from './Context'
import ReviewCard from './pages/ReviewCard';


class Reviews extends Component {
    render() {
        return (
            <div>
                <InfoConsumer>
                   {data =>{
                     return data.reviews.map(person => {
                         return <ReviewCard key={person.id} person= {person}/>
                     })
                   }} 
                </InfoConsumer>
                
            </div>
        )
    }
}
export default Reviews;
