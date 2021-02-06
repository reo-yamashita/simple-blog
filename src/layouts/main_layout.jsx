import React from "react"
// import Footer from "@/components/core/footer"
import Header from "@/components/core/header"

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="dark-transition bg-white dark:bg-bluegray-800">
        <Header />
        <main className="md:max-w-screen-xl px-4 md:px-8 mx-auto relative">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout
