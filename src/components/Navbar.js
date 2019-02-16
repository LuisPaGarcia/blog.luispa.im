import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'

const style = {
  backgroundColor: "rgb(208, 255, 166)",
  color: "rgb(2, 1, 43)",
  textAlign: "right",
  margin: "auto",
  padding: "15px"
}

const Navbar = (props ) => {
  return (
    <nav>
      <Link to="/">
        <h1 style={style}> <strong> {props.text} </strong></h1>
      </Link>
    </nav>
  )
  // return (
  //   <nav className="navbar is-transparent">
  //     <div className="container">
  //       <div className="navbar-brand">
  //         <Link to="/" className="navbar-item">
  //           <div className="content">
  //             <h1 className="has-text-weight-bold is-size-2" style={{ color: "#f40" }}>Blog.luispa</h1>
  //           </div>
  //           {/* <figure className="image">
  //           <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
  //         </figure> */}
  //         </Link>
  //       </div>
  //       <div className="navbar-start">
  //         {/* <Link className="navbar-item" to="/about">
  //         About
  //       </Link>
  //       <Link className="navbar-item" to="/products">
  //         Products
  //       </Link> */}
  //       </div>
  //       <div className="navbar-end">
  //         <a
  //           className="navbar-item"
  //           href="https://github.com/luispagarcia"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <span className="icon">
  //             <img src={github} alt="Github" />
  //           </span>
  //         </a>
  //       </div>
  //     </div>
  //   </nav>
  // )
}

export default Navbar
