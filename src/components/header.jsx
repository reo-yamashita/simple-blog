import React from "react"
import { Link } from "gatsby"
import Social from '@components/Social'

const Header = (siteMetadata) => {

  const header_list = [
    { name: 'Home', link: '/' },
    // { name: 'Profile', link: '/profile' },
    // { name: 'Works', link: '/works' },
    { name: 'Article', link: '/article' },
  ]

  return (
    <div className="shadow-sm">
      <div className="mx-auto md:max-w-5xl max-w-xl flex items-center px-8">
        <nav className="flex text-sm md:text-lg py-3 flex-1">
          {header_list.map((item, index) => {
            return (
              <Link to={`${item.link}`} key={index} className="px-4">{item.name}</Link>
            )
          })}
        </nav>
        <div className="py-3">
          <Social {...siteMetadata} />
        </div>
      </div>
    </div>
  )
}

export default Header
