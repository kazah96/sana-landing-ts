import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from './style.module.css'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children, onClose }) => {

  return <Fragment>
    <div className={style.modal}>
      <div className={style.header}>
        <span className={style.exit} onClick={onClose}>X</span>
      </div>
      {children}
    </div>
  </Fragment>
}

export default Modal