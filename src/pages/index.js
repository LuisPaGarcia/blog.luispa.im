import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../style.css';

export default class IndexPage extends React.Component {
	state = {
		visible: 'about'
	};

	up = (state) => {
		this.setState({
			visible: state
		});
	};
	render() {
		const { data } = this.props;
		const { visible } = this.state;
		const { edges: posts } = data.allMarkdownRemark;
		return (
			<Layout>
				<div className="topMenu">
					<span
						className={`item-menu-class ${visible === 'about' ? ` active` : ``}`}
						onClick={() => this.up('about')}
					>
						About
					</span>
					<span
						className={`item-menu-class ${visible === 'blog' ? ` active` : ``}`}
						onClick={() => this.up('blog')}
					>
						Blog
					</span>
				</div>
				{!(visible === 'about') ? null : (
					<section>
						<h1>HOLA</h1>
					</section>
				)}
				{!(visible === 'blog') ? null : (
					<section>
						<div>
							<div>
								<br />
								<span className="ultimas-entradas">Últimas entradas</span>
								<br />
							</div>
							{posts.map(({ node: post }) => {
								return (
									<div className="box-post" key={post.id}>
										<p>
											<Link className="post-title-class" to={post.fields.slug}>
												{post.frontmatter.title}
											</Link>
											<br />
											<small className="date-class">
												{new Intl.DateTimeFormat('es-GT', {
													year: 'numeric',
													month: 'long'
												}).format(Date.parse(post.frontmatter.date))}
											</small>
											{' - '}
											<small className="time-class">{post.timeToRead} min.</small>
										</p>
										<p>
											<span
												style={{
													fontSize: '16px',
													textAlign: 'justify',
													textJustify: 'inter-word'
												}}
											>
												{post.excerpt}
											</span>
											<br />
											<br />
											<Link className="seguir-leyendo" to={post.fields.slug}>
												Seguir leyendo →
											</Link>
										</p>
									</div>
								);
							})}
						</div>
					</section>
				)}
			</Layout>
		);
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 100)
					id
					fields {
						slug
					}
					timeToRead
					htmlAst
					frontmatter {
						title
						templateKey
						date
					}
				}
			}
		}
	}
`;
