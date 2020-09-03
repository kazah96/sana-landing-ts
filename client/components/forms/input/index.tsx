import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from '../style.module.css'
import cn from 'classnames'
import { stat } from 'fs'

type Props = {
}

const Input: React.FC<Props> = ({ }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={style.input_container}>
      <input className={style.input} onChange={onChange} value={value} />
    </div>
  )
}

export default Input