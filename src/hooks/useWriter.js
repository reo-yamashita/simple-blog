import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useWriter = (word) => {
  const dispatch = useDispatch()
  const done = useSelector((state) => state.writerReducer.isDone)
  const [subIndex, setIndex] = useState(false)

  useEffect(() => {
    if (word.length === subIndex) {
      dispatch({ type: "WRITE_FOWARD" })
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, 150)

    return () => clearTimeout(timeout)
  }, [dispatch, subIndex, word.length])

  const writer = `${word.substring(0, subIndex)}`
  return {
    writer,
    done,
  }
}

export default useWriter
