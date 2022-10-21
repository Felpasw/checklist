import { Link } from "react-router-dom"

export default function navbar(){

 
  const refreshPage = (): void => {
    window.location.reload()
  }



  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
      <button onClick = {() =>  refreshPage()} id= "New-Checklist"  className='button button is-primary is-outlined is-rounded'><Link to = "/">Ver tarefas</Link></button>
      </a>

      <div className="navbar-start">
      <a className="navbar-item">
      <button onClick = {() =>  refreshPage()} id= "New-Checklist"  className='button button is-primary is-outlined is-rounded'><Link to ="/new-checklist">Cadastrar nova checkist</Link></button>
      </a>


        </div>
    </div>
  </div>
</nav>
  )
}