import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from '../style.module.css'
import cn from 'classnames'
import { stat } from 'fs'

type Props = {
}

const Label: React.FC<Props> = ({ }) => {
  return (
    <label className={style.label}> Label</label>
  )
}

export default Label