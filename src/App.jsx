import { useState } from 'react'
import './App.css'
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div id="layout">

        <div id="nav">
          <div className="pure-menu mainMenu">
            <span className="pure-menu-heading">Toolbox</span>
            <ul className="pure-menu-list">
              <li className={`pure-menu-item ${location.pathname === '/uuid' ? 'pure-menu-selected' : ''}`}>
                <Link to="/uuid" className="pure-menu-link">UUID Generator</Link>
              </li>
              <li className={`pure-menu-item ${location.pathname === '/string' ? 'pure-menu-selected' : ''}`}>
                <Link to="/string" className="pure-menu-link">String Utilities</Link>
              </li>
              <li className={`pure-menu-item ${location.pathname === '/time' ? 'pure-menu-selected' : ''}`}>
                <Link to="/time" className="pure-menu-link">Time Utilities</Link>
              </li>
              <li className={`pure-menu-item ${location.pathname === '/json' ? 'pure-menu-selected' : ''}`}>
                <Link to="/json" className="pure-menu-link">JSON Editor</Link>
              </li>
            </ul>
          </div>
        </div> {/* End of #nav */}

        <div id="main">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
