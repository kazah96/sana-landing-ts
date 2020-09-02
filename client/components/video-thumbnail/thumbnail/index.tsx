import React from "react"
import style from "../style.module.css"

type Props = {
  children: React.ReactNode[] | React.ReactNode
  onMouseEnter?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

const VideoThumbnail: React.FC<Props> = ({ children, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      className={style.thumbnail}
      role="link"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
    >
      {children}
    </span>
  )
}

export default VideoThumbnail
