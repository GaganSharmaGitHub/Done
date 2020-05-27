import React from 'react';
import './styling/styles.css'
import NavBar from './components/navBar'
import LogSign from './components/logSign'
import MainScreen from './components/mainScreen'
import firebase from './data/firebase'
 class App extends React.Component {
   state={
     loggedIn: false,
     userData:{
         theme:'basic',
         email:'gagan'
     },
     todo:[]
   }
   
   componentDidMount(){
     
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
       console.log(user)
        let temp= this.state
        temp.loggedIn=true
        temp.userData.email=user.email
        const database = firebase.firestore()
        const userData= database.collection("users").doc(user.email).collection('todos')
        userData.onSnapshot(data=>{
          temp.todo=[]
          data.forEach((to)=>{
            temp.todo.push(to.id)
          })
          this.setState(temp)
        }) 
     }
     else{
      this.setState(
        {
          loggedIn: false,
          userData:{
              theme:'basic',
              email:null
          },
          todo:[]
        }
  
       ) 
     }
   });
   }
  render() {
    
    return (
      <div>
        <NavBar></NavBar>
        {this.state.loggedIn?<MainScreen user={this.state.userData.email} todos={this.state.todo}></MainScreen>:<LogSign ></LogSign>}
      </div>
    )
  }
}

export default App;
