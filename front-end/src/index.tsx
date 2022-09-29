import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Forms';
import Lists from './components/Lists';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component = {Lists}/> 
       <Route exact path="/new-checklist"component={Form}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);


