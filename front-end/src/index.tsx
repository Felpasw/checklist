import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './pages/Forms';
import Lists from './pages/Lists';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import InitialPage from "./pages/InitialPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component = {InitialPage}/> 
       <Route path="/:userID/new-checklist" component={Form}/>
       <Route path ="/update/:id/user/:userID"  component={Form}/>
       <Route path = "/Checklists/:userID" component={Lists}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);


