import React, { Component } from 'react'
import { InfoConsumer  } from '../Context';
import Info from './Info';

 class Home extends Component {
    render() {
        return (
            <div className="container" > 
                <h1 class="col-10 mx-auto mb-5 mt-5" style={{textAlign: 'center', textShadow: '2px 2px 6px #6e3632'}}>Choose your next destination!</h1>
                <div className="row mt-5 mx-auto">
                
                <InfoConsumer>
                        {(value) => {
                            return value.info.map(item => {

                                    return <Info key={item.id} item={item}/>
                                })
                        }}

                 </InfoConsumer>
                </div>
            </div>          
        )
    }
}

export default Home;
