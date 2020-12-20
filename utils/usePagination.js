export const usePagination = (pageContext, sideLimit) => {

  const range = (start, stop) => Array.from({ length: (stop - start) + 1 }, (_, i) => start + i);
  const sideExpose = 'SIDE_EXPOSE'
  const { numberOfPages, humanPageNumber, pathPrefix } = pageContext
  let currPage = humanPageNumber
  let edgeLimit = 2 * sideLimit + 2

  const side = edgeLimit + 2 === numberOfPages
    ? [...range(2, numberOfPages)]
    : currPage < edgeLimit
      ? [...range(2, edgeLimit), sideExpose]
      : currPage > numberOfPages - edgeLimit + 1
        ? [sideExpose, ...range(numberOfPages - edgeLimit + 1, numberOfPages - 1)]
        : [sideExpose, ...range(currPage - sideLimit, currPage + sideLimit), sideExpose]

  const PageList = [
    1,
    ...side,
    numberOfPages
  ]

  return {
    pathPrefix,
    PageList,
    currPage,
    numberOfPages,
  }

}
