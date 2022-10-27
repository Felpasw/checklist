import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './pages/Forms';
import Lists from './pages/Lists';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component = {Lists}/> 
       <Route path="/new-checklist" component={Form}/>
       <Route path ="/update/:id"  component={Form}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);


