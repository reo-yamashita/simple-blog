import React from "react"

const TopPiece = ({ children, title }) => {
  return (
    <div className="">
      <h1 className="text-2xl mb-3 text-center">{title}</h1>
      <p className="px-4">{children}</p>
    </div>
  )
}

export default TopPiece
