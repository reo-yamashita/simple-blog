import React from "react"
import { useIntersection } from "@/hooks/useObserver"

const depth_style = (depth) => {
  if (depth === 0) return "ml-0"
  if (depth === 1) return "ml-4"
  if (depth === 2) return "ml-8"
  if (depth === 3) return "ml-12"
}

const getTocEntries = (items) => {
  let entries = []
  items.forEach((item) => {
    item.url && entries.push(item.url)
    item.items && entries.push(...getTocEntries(item.items))
  })
  return entries
}

const ContentsList = ({ active, contents, depth = 0 }) => {
  return (
    <>
      {contents?.map((item) => {
        const depthStyle = depth_style(depth)
        const isActive =
          item.url === `#${active}` ? "text-little" : "text-article"

        return (
          <React.Fragment key={item.url}>
            <a
              href={item.url}
              className={`block text-sm leading-relaxed ${isActive} ${depthStyle} mb-4`}
            >
              {item.title}
            </a>
            {item.items && (
              <ContentsList
                contents={item.items}
                active={active}
                depth={depth + 1}
              />
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

const TableContents = ({ contents }) => {
  const activeNode = useIntersection(getTocEntries(contents))

  return <ContentsList contents={contents} active={activeNode} />
}

export default TableContents
