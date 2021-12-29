import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import { CardBlock } from 'reactstrap';



class Home extends Component {
    state = {}

    render() { 
        return (
            <div>
             <AppNav/>

       <div class='bgimg'>
           <div class ="card" style={{width:"30rem",marginBottom:"10px"}}>
             <div class=" mb-3 bg-info text-white">
              
             <div class="card-body">
             <h1 style={{display: 'flex', fontFamily:'playball', justifyContent:'center', alignItems:'center', height: '100vh',color :'#fff'}}>
             
               <b> Welcome to <b><span style={{color:' dark '}}></span> Ads portal !</b></b>
      
               </h1>
               
               </div>
               </div>
</div>
               </div>
               
               
              <section id="company">
              <div class="container">
                <div class="row">
                  <div class="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <h4>Contact Us</h4>
                    <ul>
                      <li><i class="fas fa-phone"></i> 987654321</li>
                      <li><i class="fas fa-envelope"></i> support@Adstheme.test</li>
                      <li><i class="fas fa-map"></i> 400 Main st, Boston MA</li>
                    </ul>
                  </div>
                  <div class="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <h4>About Us</h4>
                    <p>
                    Teams Reviews & Testimonials Audio Video News  & Media Contact Us FAQ  Blog Terms of Services Privacy Jobs Imprint!
                    </p>
                      
                  </div>
                  <div class="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <h4>Newsletter</h4>
                    <p>Promote new product in the store 
                    <br/>Please Subscribe !</p>
                    <form action="">
                      <input type="text" name="email" placeholder="Enter email" />
                    </form>
                    <button type="submit" name="submit">Submit</button>
                  </div>
                </div>
              </div>
            </section>
                    
                    <footer id="main-footer">
                        <div class = "container">
                            <div 
                            className="center"
                            style={{ marginLeft:'30%', margintop:'100%'}}
                            >
                                <div class="row center-xs center-sm center-md center-lg">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        
                                     <p> Copyright &copy; 2021 | Persistent </p>
                                </div>
                             </div>
                             </div>
                             </div>
                            
                    </footer>
                </div>
                
            );
    }
}
 
export default Home;