import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Offers extends Component {

  // {
  //   "id": 100,
  //   "expensedate": "2019-06-16T17:00:00Z",
  //   "description": "New York Business Trip",
  //   "location": "New York",
  //   "category": {
  //   "id": 1,
  //   "name": "Travel"
  //   }
  //   },
 
    emptyItem = {
        description : '' ,
        offerdate : new Date(),
        id:104,
        location : '',
        category : {id:1 , name:'Travel'}
    }

    
    constructor(props){
      super(props)

      this.state = { 
        isLoading :false,
        Categories:[],
        Offers : [],
        date :new Date(),
        item : this.emptyItem
       }

       this.handleSubmit= this.handleSubmit.bind(this);
       this.handleChange= this.handleChange.bind(this);
       this.handleDateChange= this.handleDateChange.bind(this);

    } 

    async handleSubmit(event){
     
      const item = this.state.item;
    

      await fetch(`/api/offers`, {
        method : 'POST',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(item),
      });
      
      event.preventDefault();
      this.props.history.push("/offers");
    }


    handleChange(event){
      const target= event.target;
      const value= target.value;
      const name = target.name;
      let item={...this.state.item};
      item[name] = value;
      this.setState({item});
      console.log(item);
    }


    handleDateChange(date){
      let item={...this.state.item};
      item.offerdate= date;
      this.setState({item});
    
    }






    async remove(id){
        await fetch(`/api/offers/${id}` , {
          method: 'DELETE' ,
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }

        }).then(() => {
          let updatedOffers = [...this.state.Offers].filter(i => i.id !== id);
          this.setState({Offers : updatedOffers});
        });

    }


    async componentDidMount() {
 
     

        const response= await fetch('/api/categories');
        const body= await response.json();
        this.setState({Categories : body , isLoading :false});


        const responseOff= await fetch('/api/offers');
        const bodyOff = await responseOff.json();
        this.setState({Offers : bodyOff , isLoading :false});
        console.log(bodyOff);

    }





    render() { 
        const title =<h3>Add Offer</h3>;
        const {Categories} =this.state;
        const {Offers,isLoading} = this.state;
        

        if (isLoading)
            return(<div>Loading....</div>)
        


        let optionList  =
                Categories.map( (category) =>
                    <option value={category.id} key={category.id}>
                                {category.name} 
                    </option>
                )
        
        let rows=
            Offers.map( offer =>
              <tr key={offer.id}>
                <td>{offer.description}</td>
                <td>{offer.location}</td>
                <td><Moment date={offer.offerdate} format="YYYY/MM/DD"/></td>
                <td>{offer.category.name}</td>
                <td><Button size="sm" color="danger" onClick={() => this.remove(offer.id)}>Delete</Button></td>

              </tr>


            )
        

        return (
            <div>
              
                <AppNav/>
  
              
                <Container>
                    {title}
                    
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="description">Title</Label>
                        <Input type="description" name="description" id="description" 
                            onChange={this.handleChange} autoComplete="name"/>
                    
                    </FormGroup>

                    <FormGroup>
                        <Label for="category" >Category</Label>
                        <select onChange={this.handleChange}>
                                {optionList}
                        </select>
                    
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">Date</Label>
                        <DatePicker    selected={this.state.item.expensedate}  onChange={this.handleDateChange} />
                    </FormGroup>

                    <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                        <Label for="location">Location</Label>
                        <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                        </FormGroup>
                      
                    </div>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>
                    </Form>
                </Container>
              

          {''}
              <Container>
                <h3>Product List</h3>
                <Table className="mt-4">
                <thead>
                  <tr>
                    <th width="30%">Description</th>
                    <th width="10%">Location</th>
                    <th> Date</th>
                    <th> Category</th>
                    <th width="10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                   {rows}
                </tbody>

                </Table>
              </Container>
              

          <dev><br/><br/><br/></dev>
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
 
export default Offers;
