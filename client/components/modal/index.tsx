import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from './style.module.css'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children }) => {

  return <Fragment>
    <div className={style.modal}>
      {children}
    </div>
  </Fragment>
}

export default Modal