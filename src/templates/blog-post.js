import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Navbar from '../components/Navbar';

import '../style.css';

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet }) => {
	const PostContent = contentComponent || Content;

	return (
		<div>
			{helmet || ''}
			<h1 className="title-class">{title}</h1>
			<p>{description}</p>
			<PostContent content={content} />
			{tags && tags.length ? (
				<div style={{ marginTop: `4rem` }}>
					<h3>Tags</h3>
					{tags.map((tag) => (
						<Link className="tag-class" key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}>
							{tag}
						</Link>
					))}
				</div>
            ) : null}
            <br/>
			<Navbar text="Volver" />
		</div>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<BlogPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}
	}
`;
