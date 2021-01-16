import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"

import Brightness2Icon from "@material-ui/icons/Brightness2"
import { themeColorToggle } from "@/store/themeRed"

const Header = () => {
  const dispatch = useDispatch()
  const isFirstRender = useRef(true)
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

  useEffect(() => {
    if (isFirstRender.current) {
      if (state[0] === "dark") {
        console.log("reo")
        dispatch(themeColorToggle(darkLight))
      }
      isFirstRender.current = false
    }
  }, [darkLight, dispatch, state])
  console.log("reo")
  return (
    <header className="mx-auto max-w-screen-md md:max-w-screen-xl px-8 md:px-16 relative z-0">
      <div
        className={`absolute rounded-full opacity-20 circles top-20 left-1/4 md:left-2/4 transform -translate-x-2/4 md:top-36 bg-blue-200`}
      ></div>
      <div
        className={`absolute rounded-full opacity-10 circles1 right-8 sm:right-44 top-12 sm:top-28  bg-teal-200`}
      ></div>
      <div
        className={`absolute rounded-full opacity-10 circles2 -right-16 sm:right-52 top-96 sm:top-80  bg-rose-200`}
      ></div>
      <div className="flex items-center pt-16 pb-8 z-20 relative">
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
