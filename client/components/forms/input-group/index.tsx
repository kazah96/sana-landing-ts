import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from '../style.module.css'

type Props = {
  children: any
}

const InputGroup: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.input_group}>
      {children}
    </div>
  )
}

export default InputGroup