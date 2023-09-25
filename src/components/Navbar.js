import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    // <div>
    //   Hello I am a Navbar
    // </div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  
    {/* Use of template literal */}
    {/* we can make navbar dark by replacing light here by dark */}
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>  
            {/* hr tag don't have ending tag so use slash to show it in jsx as jsx requires compulsory tag termination */}
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a> 
          {/* always use camelcase as shown in tabIndex to avoid warnings */}
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <div className="form-check form-switch text-light"> */}
      <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
        {/* when I use backtick in Java Script, than I can use any variable by using $ or curly bracket. This is a variable and it has a ternary operator in it. And it says that, if mode of prop is dark than it should become light. and if mode of prop is light than it should become dark. */}
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={ //takes camelcase 
    // title:PropTypes.string,
    title:PropTypes.string.isRequired, //then we had to give value for title here if default is not present or error will occur here
    aboutText:PropTypes.string
}

Navbar.defaultProps={ //takes camelcase 
    title:'Set title here',
    aboutText:'About'
}
//this is an object which acts as restrictor

//rfc --> react function based components
//we turned code of navbar in reusable navbar file
//we always had to pass title and details/text like key and value
//for routing also we changed a--href tags to link--to tags
//refer this video for this:https://www.youtube.com/watch?v=Fi75tq9JikI&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=17&ab_channel=CodeWithHarry