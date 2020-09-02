import React from "react"
import style from "./style.module.css"
import Thumbnail from "../thumbnail"

type Props = {

}

const AddVideo: React.FC<Props> = ({ }) => {
  return <Thumbnail>
    <div className={style.container}></div>
  </Thumbnail>
}

export default AddVideo