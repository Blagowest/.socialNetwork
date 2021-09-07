import React from "react";
import './App.css';
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";
import state from "./redux/state";

function App(props) {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='App-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.state.addPost}/>}/>
                </div>
            </div>
    );
}

export default App;
