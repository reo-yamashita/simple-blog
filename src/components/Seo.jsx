import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, author, image, keywords }) => {
  const detailsQuery = graphql`
    query seo {
      site {
        siteMetadata {
          description
          author
          siteUrl
          image
          social {
            github
            twitter
          }
        }
      }
    }
  `
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.author
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = author || data.site.siteMetadata.siteUrl
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || ["gatsby blog", "gatsby"]
        return (
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `twitter:creator`,
                content: metaAuthor,
              },
              {
                property: `twitter:title`,
                content: metaTitle,
              },
              {
                property: `twitter:image`,
                content: metaImage,
              },
              {
                property: `twitter:description`,
                content: metaDescription,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                  name: `Keywords`,
                  content: metaKeywords.join(`, `),
                }
                : []
            )}
          />
        )
      }}
    />
  )
}

export default Seo
