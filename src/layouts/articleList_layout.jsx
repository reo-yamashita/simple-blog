import React from "react"

const ArticleListLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="mx-auto max-w-3xl min-h-screen flex-1">{children}</div>
    </div>
  )
}

export default ArticleListLayout
