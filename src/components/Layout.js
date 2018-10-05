import React from 'react'
import Helmet from 'react-helmet'
import "../style.css";
// import PageTransition from 'gatsby-plugin-page-transitions';

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = (props) => {
  return (
    // <PageTransition>
      <div>
        <Helmet title="blog 🧠" />
        <br />
        <br />
        <Navbar text="blog.luispa.im" />
        <div>{props.children}</div>
        <br />
        <br />
      </div>
    // </PageTransition>

  )
}

export default TemplateWrapper
