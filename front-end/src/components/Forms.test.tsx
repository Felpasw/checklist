import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import App from './Forms';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';



  it('should render de button - "Enviar"-  ',()=>{
    const history = createMemoryHistory();
    const route = '/new-checklist';
    history.push(route);
  render(
      <Router history={history}>
        <App/>
      </Router>
      );
      const text = "Enviar"
    expect(screen.getByTestId("SendButton")).toBeVisible()
    expect(screen.getByTestId("SendButton")).toHaveTextContent(text)
  })

  it('should render de button - "Editar"-  ',()=>{
    const history = createMemoryHistory();
    const route = '/update/633b5c93176bcbb059429b76';
    history.push(route);
  render(
      <Router history={history}>
        <App/>
      </Router>
      );

    expect(screen.getByTestId('EditButton')).toBeVisible()
    expect(screen.getByTestId('EditButton')).toHaveTextContent('Editar')
  })