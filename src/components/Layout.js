import React from 'react';
import Helmet from 'react-helmet';
import '../style.css';
import PageTransition from 'gatsby-v2-plugin-page-transitions';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = (props) => {
	return (
		<div>
			<Helmet title="Luispa.im" />
			<Navbar text="luispa.im" />
			<PageTransition>
				<div>{props.children}</div>
				<br />
				<br />
			</PageTransition>
		</div>
	);
};

export default TemplateWrapper;
