import React from "react"
import Socail from "@components/Social"

const Footer = () => {
  return (
    <section className="pt-12 pb-28 bg-bluegray-50 dark:bg-gray-900 dark:bg-opacity-25 dark-transition opacity-80">
      <div className="flex px-8">
        <div>
          <Socail />
          <div className="mt-4">
            <p
              className="cursor-pointer px-2 p-1 text-sm text-center bg-lightblue-600 text-white
            tracking-wide bg-opacity-90 dark:opacity-95 hover:opacity-80 dark:bg-lightblue-900 transition-colors"
            >
              contact
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  )
}

export default Footer
