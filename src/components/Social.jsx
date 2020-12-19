import React from "react"
//import 'remixicon/fonts/remixicon.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
const Social = (siteMetadata) => {

  return (
    <div className="flex items-center space-x-4 px-3">
      <div className="opacity-70 hover:">
        {siteMetadata.social.twitter && (
          <a
            href={`https://github.com/${siteMetadata.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src="/twitter-line.svg" alt="twitter_icon" /> */}
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
            {/* <img src="/github-line.svg" alt="github_icon" /> */}
            <GitHubIcon />
          </a>
        )}
      </div>
    </div>
  )
}

export default Social
