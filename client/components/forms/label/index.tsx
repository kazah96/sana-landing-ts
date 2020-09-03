import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from '../style.module.css'
import cn from 'classnames'
import { stat } from 'fs'

type Props = {
  text: string
}

const Label: React.FC<Props> = ({ text }) => {
  return (
    <label className={style.label}> {text}</label>
  )
}

export default Label