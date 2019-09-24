import React, { Component } from 'react'
import { InfoConsumer  } from '../Context';

 class Details extends Component {
    render() {
        return (
          <InfoConsumer>
            {data => {
              const {
                id,
                headerTitle,
                headerSubTitle,
                headerText,
                img,
                title,
                maps,
                description
              } = data.detailInfo;

              return (
                <React.Fragment>
                <div className ="container-fluid align-items center">
                  <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                  <h4 className="display-5">{headerSubTitle}</h4>
                  <p>{headerText}</p>   

                  {/* Social Icons            */}
                  <div className="container mt-5">
                    <div className="row justify-content-center">
                      <div className="col-2">
                        <i className="fa fa-facebook-f"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa fa-twitter"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa fa-google-plus"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa fa-reddit"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa fa-whatsapp"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa fa-facebook-messenger"></i>
                      </div>
                    </div>
                  </div>
                  <section id="tabs"className="mt-5">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 ">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Description</a>
						<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Public Reviews</a>
						<a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Map</a>
					</div>
				</nav>
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <h2 className="mb-3 display-6">{title}</h2>
                          <p>{description}</p>
                          <img src ={img} alt="title"className="img-thumbnail img-fluid"></img>

					</div>
					<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <h2 className="mb-3">Read what our visitors have to say about us</h2>
          <p>Reviews go here</p>
					</div>
					<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <h2 className="mb-3">Find us here</h2>
          <iframe src={maps} style= {{ border:'0', height:'80vh', width:"80vw", frameborder:'0'}}></iframe>
					</div>
				
				</div>
        <button className="btn-lg btn-dark text-uppercase text-white mb-5">Book a Tour</button>
			
			</div>
		</div>
	</div>
</section>
                  </div>
            
                
                </React.Fragment>
              )
            }}


          </InfoConsumer>
      
      
      
           
        )}
}

export default Details;


