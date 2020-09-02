import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from './style.module.css'
import cn from 'classnames'
import { stat } from 'fs'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  onMouseOver: (e) => void
}

const DraggableItem: React.FC<Props> = ({ children, onMouseOver }) => {
  const [status, setStatus] = useState({ isDragging: false })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const container = useRef();

  const onMouseDown = (e) => {
    setStatus({ isDragging: true })
    console.log(e)
    setOffset({ x: e.layerX, y: e.layerY })
  }

  const onMouseUp = (e) => {
    setStatus({ isDragging: false })
  }

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }


  useEffect(() => {
    if (container && container.current) {
      // container.current.addEventListener('mousedown', onMouseDown)
      // container.current.addEventListener('mouseup', onMouseUp)
      // container.current.addEventListener('mouseover', onMouseOver)
      // document.addEventListener('mousemove', onMouseMove)
    }

  }, [])

  const cl = cn({ [style.dragging]: status.isDragging })

  const st = status.isDragging ? {
    top: position.y - offset.y, left: position.x - offset.x
  } : {}

  return <Fragment>
    <span ref={container} className={cl} style={st}>{children}</span>
    {status.isDragging && <span className={style.placeholder} >{children}</span>}
  </Fragment>
}

export default DraggableItem