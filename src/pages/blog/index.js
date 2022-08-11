import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      <ul>
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              {/* Use slug instead of id to turn the title into a link since it contains the last part of the url like my-first-post etc.*/}
              <Link to={`/blog/${node.slug}`}> 
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
