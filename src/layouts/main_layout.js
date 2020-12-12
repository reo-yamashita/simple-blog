import React from "react"
import Sidebar from "@components/Sidebar"

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 md:pr-12">
      <div className="mx-auto max-w-4xl min-h-screen flex">
        <div className="sm:flex py-4 flex-1">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
