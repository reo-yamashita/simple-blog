const useColored = (categories) => {
  const color_name = [
    {
      bg: "dark:bg-blue-500 bg-blue-300",
      text: "text-blue-400",
      hover: "hover:bg-blue-300",
    },
    {
      bg: "dark:bg-emerald-500 bg-emerald-300",
      text: "text-emerald-400",
      hover: "hover:bg-emerald-300",
    },
    {
      bg: "dark:bg-teal-500 bg-teal-300",
      text: "text-teal-400",
      hover: "hover:bg-teal-300",
    },
    {
      bg: "bg-indigo-500",
      text: "text-indigo-500",
      hover: "hover:bg-indigo-400",
    },
    {
      bg: "dark:bg-lightblue-500 bg-lightblue-300",
      text: "text-lightblue-400",
      hover: "hover:bg-lightblue-300",
    },
    { bg: "bg-gray-400", text: "text-gray-400", hover: "hover:bg-gray-300" },
    { bg: "bg-red-400", text: "text-red-400", hover: "hover:bg-red-300" },
    { bg: "bg-rose-400", text: "text-rose-400", hover: "hover:bg-rose-300" },
  ]

  const Colors = (category) => {
    if (category === "react" || category === "typescript") {
      return color_name[0]
    } else if (category === "vue") {
      return color_name[1]
    } else if (category === "nuxt") {
      return color_name[2]
    } else if (category === "gatsby") {
      return color_name[3]
    } else if (category === "tailwind" || category === "sapper") {
      return color_name[4]
    } else if (category === "svelte") {
      return color_name[6]
    } else if (category === "rollup") {
      return color_name[7]
    } else {
      return color_name[5]
    }
  }

  return categories.map((cat) => {
    const colored = Colors(cat)
    return {
      name: cat,
      colored,
    }
  })
}

export default useColored
