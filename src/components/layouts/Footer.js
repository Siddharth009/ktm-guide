import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer special-color-dark bg-dark " >
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
        
 
        // <div className=" footer page-footer font-small special-color-dark pt-4" style ={{ backgroundColor:'#525059' }}>
        
        
        //   <div className="container">
        
        
        //     <div className="row">
        
          
        //       <div className="col-md-6 mb-4">
        
             
        //         <form className="form-inline">
        //           <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
        //             aria-label="Search"/>
        //           <i className="fas fa-search" aria-hidden="true"></i>
        //         </form>
              
        
        //       </div>
        
        
           
        //       <div className="col-md-6 mb-4">
        
        //         <form className="input-group">
        //           <input type="text" className="form-control form-control-sm" placeholder="Your email"
        //             aria-label="Your email" aria-describedby="basic-addon2"/>
        //           <div className="input-group-append">
        //             <button className="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
        //           </div>
        //         </form>
        
        //       </div>
           
        
        //     </div>
         
        
        //   </div>
         
        //   <div className="footer-copyright text-center py-3">© 2018 Copyright:
        //     <a href="https://mdbootstrap.com/education/bootstrap/">ktmguides.com</a>
        //   </div>
         
        
        // </div>
      




       
//     )
// }

// export default Footer;
