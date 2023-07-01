import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from './components/page/signIn';
import Home from './components/home/home';

function App(){
    return(
        <>
            <Route path="/" exact component={SignIn} />
            <Route path="/home" exact component={Home} />
        </>
    );
}

export default App;