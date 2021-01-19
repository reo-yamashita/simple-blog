import React from "react"
import Socail from "@components/Social"

const Footer = () => {
  return (
    <section className="pt-12 pb-28 bg-bluegray-50 dark:bg-gray-900 dark-transition">
      <div className="max-w-screen-md mx-auto py-4">
        <div className="flex flex-row px-8">
          <div className="flex gap-x-3 items-center">
            <Socail />
            <p
              className="cursor-pointer px-4 p-1 text-sm text-center bg-lightblue-600 text-white
            tracking-wide bg-opacity-90 dark:opacity-95 hover:opacity-80 dark:hover:bg-opacity-80 dark:bg-lightblue-900 transition-colors"
            >
              contact
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  )
}

export default Footer
