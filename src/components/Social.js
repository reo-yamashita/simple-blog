import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"

const Social = ({ siteMetadata }) => {
  return (
    <ul className="mt-2 text-center">
      {siteMetadata.social.github && (
        <a
          href={`https://github.com/${siteMetadata.social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      )}
      <p className="select-none tracking-wide text-xs p-1 text-gray-600">
        ©{siteMetadata.year} {siteMetadata.author}
      </p>
    </ul>
  )
}

export default Social
