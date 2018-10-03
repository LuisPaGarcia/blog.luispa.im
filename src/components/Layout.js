import React from 'react'
import Helmet from 'react-helmet'
import "../style.css";

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="blog 🧠" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
