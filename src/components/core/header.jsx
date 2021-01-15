import React, { useCallback } from "react"
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

  const darkLight = ["dark", "light"]

  const themeHandler = useCallback(
    () =>
      dispatch(
        themeColorToggle(state[0] === "light" ? darkLight : darkLight.reverse())
      ),
    [state, dispatch, darkLight]
  )

  return (
    <header className="mx-auto max-w-screen-md md:max-w-screen-xl px-8 md:px-16">
      <div className="flex items-center pt-16 pb-8">
        <nav className="flex items-center flex-grow text-secondary ">
          {header_list.map((item, index) => {
            return (
              <Link
                activeClassName="text-article-accent"
                className="px-4"
                to={`${item.link}`}
                key={index}
                aria-label="header_item"
                partiallyActive={index ? true : false}
              >
                <p className="dark-transition">{item.name}</p>
              </Link>
            )
          })}
        </nav>
        <div
          aria-hidden="true"
          className={`cursor-pointer transition-colors ${
            state[0] === "light" ? "text-gray-500" : "text-blue-200"
          }`}
          onClick={themeHandler}
        >
          <Brightness2Icon fontSize="small" />
        </div>
      </div>
    </header>
  )
}

export default Header
