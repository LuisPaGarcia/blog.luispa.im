import React from 'react'
import Helmet from 'react-helmet'
import "../style.css";

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = (props) => {
  return(
  <div>
    <Helmet title="blog 🧠" />
    <br />
    <br />
    <Navbar text="blog.luispa.im"/>
    <div>{props.children}</div>
    <br />
    <br />
  </div>
)}

export default TemplateWrapper
