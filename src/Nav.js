import React, { Component } from 'react';

class Nav extends Component {
 
    render() {
        const cyan = {
            "Cyan": "#37BC9B"
        }

        return (
            <div>
                <nav className="navbar navbar-expand-xl navbar-dark|light mb-3" style={{backgroundColor : cyan.Cyan}}>
          <a className="navbar-brand" >Navbar</a>
          <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
              <ul className="navbar-nav  mt-2 mt-lg-0">
                  <li className="nav-item active">
                      <a className="nav-link" >Danh Sach Note <span className="sr-only">(current)</span></a>
                  </li>
                 
              </ul>
             
          </div>
      </nav>

            </div>
        );
    }
}

export default Nav;