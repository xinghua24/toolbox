import { useState } from 'react'
import './App.css'
import UUIDGenerator from './UUIDGenerator/UUIDGenerator'

function App() {

  return (
    <>
      <div id="layout" className="pure-g">

        <div id="nav" className="pure-u">
          <div className="pure-menu mainMenu">
            <span className="pure-menu-heading">Toolbox</span>
            <ul className="pure-menu-list">
              <li className="pure-menu-item   pure-menu-selected"><a href="#" className="pure-menu-link">UUID Generator</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">String Utils</a></li>
            </ul>
          </div>
        </div> {/* End of #nav */}


        <div id="main" className="pure-u-1-2">
          <UUIDGenerator />
        </div>
      </div>
    </>
  )
}

export default App
