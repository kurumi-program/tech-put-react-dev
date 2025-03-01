import React, { PropsWithChildren } from "react"

export const TitleHead = ({children}: PropsWithChildren) => {
  return <h2 className="text-xl font-bold">{children}</h2>
}