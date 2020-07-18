import * as React from "react"
import { Link, graphql } from "gatsby"
import { IndexHogeQuery } from "../../types/graphql-types"
// ______________________________________________________
//
type Props = {
  data: IndexHogeQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <strong>{data.site?.siteMetadata?.title}</strong> site.
    <p>Welcome to your new </p>
    <p>Now go build something great.</p>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li>
        <Link to="/authors/">Go to authors</Link>
      </li>
    </ul>
    {
      data.allContentfulPerson.edges.map(
        edge => {
          return `${edge.node.name} (${edge.node.title})` 
        }
      )
    }
  </div>
)
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson {
      edges {
        node {
          title
          name
          id
          contentful_id
        }
      }
    }
  }
`
// ______________________________________________________
//
export default Component
