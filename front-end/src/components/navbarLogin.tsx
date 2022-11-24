import { Fragment } from "react";
import{ImHome} from "react-icons/im"

export default function NavbarLogin() {
  return(
  <Fragment>
   <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  
   <a href= {`/`} className="navbar-item is-primary" onClick={()=> refreshPage()}>
          <ImHome/>
    </a>
</div>
  
</nav>
  </Fragment>
)
}

function refreshPage(): void {
  window.location.reload()
}
