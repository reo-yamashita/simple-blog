import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GitHubIcon from "@material-ui/icons/GitHub"
//import TwitterIcon from "@material-ui/icons/Twitter"

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            twitter
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <div className="flex items-center space-x-4 px-3">
      {/* <div className="opacity-70">
        {social.twitter && (
          <a
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="dark:hover:text-blue-300"
          >
            <TwitterIcon fontSize="large" />
          </a>
        )}
      </div> */}
      <div className="opacity-70">
        {social.github && (
          <a
            href={`https://github.com/${social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="dark:hover:text-teal-300"
          >
            <GitHubIcon fontSize="large" />
          </a>
        )}
      </div>
    </div>
  )
}

export default Social
