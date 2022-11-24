import {ImHome} from 'react-icons/im'



export default function navbar(props:{userID:string}){

 
  const refreshPage = (): void => {
    window.location.reload()
  }



  return(
   
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  
   <a href= {`/`} className="navbar-item is-primary" onClick={()=> refreshPage()}>
          <ImHome/>
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
      <a href={`/Checklists/${props.userID}`}> <button onClick = {() =>  refreshPage()} id= "Checklists"  className='button button is-primary is-outlined is-rounded'>Ver tarefas</button></a>
      </a>

      <div className="navbar-start">
      <a className="navbar-item">
      <a href = {`/${props.userID}/new-checklist`}><button onClick = {() =>  refreshPage()} id= "New-Checklist"  className='button button is-primary is-outlined is-rounded'>Cadastrar nova tarefa</button></a>
      </a>


        </div>
    </div>
  </div>
</nav>

  )
}