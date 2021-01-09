import React from "react"

const Footer = (siteMetadata) => {
  return (
    <div className="pt-8 mx-auto max-w-4xl pb-1">
      <div className="flex justify-center">
        ©{siteMetadata.year} {siteMetadata.title}
      </div>
    </div>
  )
}

export default Footer
