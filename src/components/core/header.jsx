import React from "react"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"

import Brightness2Icon from "@material-ui/icons/Brightness2"
import { themeColorToggle } from "@/store/themeRed"

const Header = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.themeReducer.themeColor)

  const header_list = [
    { name: "Home", link: "/" },
    { name: "Article", link: "/article" },
  ]

  return (
    <header className="mx-auto max-w-screen-md md:max-w-screen-xl px-10 md:px-24">
      <div className="flex items-center pt-16 pb-8">
        <nav className="flex items-center flex-grow">
          {header_list.map((item, index) => {
            return (
              <Link
                to={`${item.link}`}
                key={index}
                className="px-4"
                aria-label="header_item"
              >
                <p className="font-normal text-base text-secondary  dark-transition">
                  {item.name}
                </p>
              </Link>
            )
          })}
        </nav>
        <div
          className={`cursor-pointer transition-colors ${
            state === "light" ? "text-gray-500" : "text-blue-200"
          }`}
          aria-hidden="true"
          onClick={() => {
            dispatch(themeColorToggle(state === "light" ? "dark" : "light"))
          }}
        >
          <Brightness2Icon />
        </div>
      </div>
    </header>
  )
}

export default Header
