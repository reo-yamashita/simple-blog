import React, { useState, useCallback } from 'react'
import Highlight, { Prism } from 'prism-react-renderer'
import github from '@/style/githubStyle';
import copy from 'copy-to-clipboard';

const range = (
  start,  //number
  end //number
) => {
  let list = [];
  for (let i = start; i <= end; i++) {
    list.push(i)
  }
  return list;
}

const HighlightClassName = ' highlight-line'

const LinesToHighlight = (
  light,
  index
) => {
  const Try = /([\d,-]+)/
  if (Try.test(light)) {
    const lineNumbers = Try.exec(light)[1]
    const result = lineNumbers.split(/,/)

    let allselectedNum = [] // : number[]
    result.forEach((num) => {
      if ((/-/).test(num)) {
        const PairNum = num.split('-').map(Number)
        const NumResultLong = range(PairNum[0], PairNum[1])
        allselectedNum = [...NumResultLong]
      } else {
        const AloneNum = Number(num)
        allselectedNum.push(AloneNum)
      }
    })

    const finalnums = [...new Set(allselectedNum)]
    return finalnums.includes(index + 1)
  } else return false
}

let highlightFlag = false

const isHighlightedLine = (lineArray) => {  //: {content: string}[]
  let flag = false
  lineArray.forEach((line) => {
    const content = line.content
    if ((/\/\/highlight$/).test(content)) {
      flag = true
    } else if ((/\/\/highlight-start$/).test(content)) {
      highlightFlag = true
    } else if (highlightFlag && (/\/\/highlight-end$/).test(content)) {
      flag = true
      highlightFlag = false
    }
    line.content = content.replace(/\/\/highlight(.*)/g, '')
  })

  return (highlightFlag || flag)
}

const Code = ({
  codeString,
  language,
  title,
  highlight,
  light,
  svelte,
}) => {

  const [value, setValues] = useState(['Copy', false])

  const handleClick = useCallback(() => {

    copy(codeString.replace(/\/\/h(.*)/g, ''), {
      debug: true,
      message: 'Code Copy',
    });

    setValues(['Copied', true])
    setTimeout(() => {
      setValues(['Copy', false])
    }, 5000)
  }, [codeString])

  return (
    <Highlight
      theme={github}
      Prism={Prism}
      code={codeString}
      language={language}
    >
      {({
        className,
        tokens,
        getLineProps,
        getTokenProps
      }) => {
        return (
          <div className="mb-3 code-surface-spread ">
            <div className="gatsby-title">
              {title && (
                <div className="px-5 py-3 leading-none bg-gray-100 rounded-md border-b border-gray-200">
                  <p className="text-indigo-900 text-sm px-3 select-none leading-none">{title}</p>
                </div>
              )}
            </div>
            <div className={`gatsby-highlight bg-gray-100 relative shadow-sm rounded-md`}>
              <pre className={svelte ? `language-svelte` : `language-${language}`}  >
                <div className="px-0 pt-10 pb-6 overflow-auto scrolls">
                  <button
                    onClick={handleClick}
                    className={`mt-1 mx-4 focus:outline-none focus absolute top-0 right-0 text-gray-300`}
                    disabled={value[1]}
                  >
                    <p className="rounded-lg hover:bg-gray-100 hover:text-gray-600 font-sans text-sm py-1 px-2 transition duration-300 ease-in-out">
                      {value[0]}
                    </p>
                  </button>
                  <div className="text-sm text-blue-900 px-6 float-left block min-w-full">
                    {tokens.map((line, index) => {
                      const lineProps = getLineProps({ line, key: index })

                      if (isHighlightedLine(line) && light) { lineProps.className += HighlightClassName }
                      if (LinesToHighlight(highlight, index)) { lineProps.className += HighlightClassName }

                      return (
                        <div {...lineProps} >
                          {line.map((token, key) => {
                            const tokenProps = getTokenProps({ token, key: key })
                            return (
                              <span {...tokenProps} />
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </pre>
            </div>
          </div>
        )
      }}
    </Highlight>
  )
}

export default Code