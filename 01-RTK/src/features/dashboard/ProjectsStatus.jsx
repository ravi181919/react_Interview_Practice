import React from 'react'

const ProjectsStatus = ({ Card, FiArrowUpRight, FaCaretUp, CardHeader, CardContent}) => {
  return (
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-1 gap-2 items-center place-items-center">
        {[...Array(4)].map((_, i) => (
          <Card
            key={i}
            className={`w-full lg:w-full lg:h-24 md:h-fit bg-transparent overflow-hidden relative p-1 ${
              i === 0 ? "bg-linear-to-tr from-[#64b345]  to-[#0daed6] text-neutral-50" : ""
            } `}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
            <CardHeader className="w-full h-fit relative px-2 py-1 rounded-t-xl">
              <div className="flex w-full justify-between items-center px-1  z-1">
                <h1 className="font-medium text-xs w-fit">Total Projects</h1>
                <span
                  className={`border ${
                    i === 0
                      ? "border-neutral-50 text-orange-300"
                      : "border-accent"
                  } rounded-full font-medium inline-flex h-5 w-5 justify-center items-center `}
                >
                  <FiArrowUpRight size={10} />
                </span>
              </div>
            </CardHeader>
            <CardContent className="w-full h-fit relative px-3 pt-0 z-1">
              <h1 className={`font-medium text-lg text-start z-1`}>1819</h1>
              <p className="flex items-center gap-1 z-1 px-0.5 mt-1">
                {i === 3 ? (
                  ""
                ) : (
                  <span
                    className={`inline-flex border border-accent items-center justify-between gap-0.5 py-0.5 px-1 rounded-sm ${
                      i === 0 ? "border-orange-200 text-orange-300" : ""
                    }`}
                  >
                    <span className="text-[8px]">5</span>
                    <FaCaretUp size={8} className="mb-px" />
                  </span>
                )}
                <span
                  className={`text-[10px] tracking-wide font-extralight ${
                    i === 0 ? "text-orange-200" : ""
                  }`}
                >
                  Increased from last month{" "}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
  )
}

export default ProjectsStatus
