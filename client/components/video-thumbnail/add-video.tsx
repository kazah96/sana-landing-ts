import React from "react"
import style from "./style.module.css"
import Thumbnail from "./thumbnail"
import cn from 'classnames'

type Props = {
  onClick: () => void
}

const AddVideo: React.FC<Props> = ({ onClick }) => {
  return <Thumbnail>
    <div onClick={onClick} className={cn(style.img, style.overlay)}>
      <div className={style.label}>ADD VIDEO</div>
    </div>
  </Thumbnail>
}

export default AddVideo