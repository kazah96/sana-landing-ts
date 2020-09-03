import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from '../style.module.css'

type Props = {
  children: any
}

const Form: React.FC<Props> = ({ children }) => {
  return (
    <form className={style.form}>
      {children}
    </form>
  )
}

export default Form