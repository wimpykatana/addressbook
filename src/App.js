import React from 'react';
import Item from './component/Item'
import Detail from './component/detail';
import './App.css';
import { connect } from 'react-redux'
import { getContactAsync } from "./contactSlice";
import { Container } from 'reactstrap';

let contactList;
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contactDetail: null
    }
    this.contactClick = this.contactClick.bind(this);
    this.closeContactDetail = this.closeContactDetail.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(getContactAsync)
  }

  contactClick(param){
    this.setState({
      contactDetail: contactList[param]
    })
  }

  closeContactDetail(){
    this.setState({
      contactDetail: null,
    })
  }

  render() {
    console.log("contact detail",this.state.contactDetail);

    if(this.state.contactDetail){
      return(
        <Detail contactDetail={this.state.contactDetail} closeMe={() => this.closeContactDetail()} />
      )
    }

    if( this.props.contact.isLoading === false){
      contactList = this.props.contact.data.results;
      return (
        <Container>
          {/* <Item /> */
            contactList.map ( ( contact , i ) => {
              return (
                <Item 
                  firstName={contact.name.first} 
                  lastName={contact.name.last} 
                  propic={contact.picture} 
                  email={contact.email}
                  clickDetail={() => this.contactClick(i)}
                  key={i}/>
              )
            })
          }
        </Container>
      );
    }

    return(
      <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
        Loading Data
      </div>
    )

   
  }
}

const mapStateToProps = state => ({
  contact: state.contact,
});

export default connect(mapStateToProps)(App);
