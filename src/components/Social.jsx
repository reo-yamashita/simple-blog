import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"

const Social = (siteMetadata) => {
  return (
    <div className="flex items-center space-x-4 px-3">
      <div className="opacity-70 hover:">
        {siteMetadata.social.twitter && (
          <a
            href={`https://twitter.com/${siteMetadata.social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        )}
      </div>
      <div className="opacity-70">
        {siteMetadata.social.github && (
          <a
            href={`https://github.com/${siteMetadata.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        )}
      </div>
    </div>
  )
}

export default Social
