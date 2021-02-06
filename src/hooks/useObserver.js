import { useState, useEffect, useRef } from "react"

export const useIntersection = (contents) => {
  const [intersecting, setIntersecting] = useState(null)
  const observer = useRef(null)

  const options = {
    root: null,
    rootMargin: "0% 0% -60% 0%",
    threshold: 1,
  }

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setIntersecting(entry.target.getAttribute("id"))
      })
    }, options)

    contents.forEach((content) => {
      let target = document.querySelector(content)
      if (target) observer.current.observe(target)
    })

    return () => {
      observer.current.disconnect()
    }
  }, [intersecting, contents, options])

  return intersecting
}
