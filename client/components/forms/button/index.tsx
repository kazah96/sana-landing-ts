import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from '../style.module.css'

type Props = {
  text: string,
  onClick: () => void
}

const Input: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button type="button" onClick={onClick} className={style.button}>
      {text}
    </button>
  )
}

export default Input