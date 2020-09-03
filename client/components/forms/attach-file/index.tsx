import React, { useEffect, useRef, useState, Fragment } from 'react'
import style from '../style.module.css'
import { debug } from 'console'

type Props = {
  // onChange: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AttachFile: React.FC<Props> = ({ onChange }) => {
  const onClick = () => { }

  return (
    <div className={style.attach}>
      <label onClick={onClick} className={style.attach_label}>
        <span className={style.icon} >
          <i className="fa fa-paperclip" aria-hidden="true"></i>
        </span>
        <span className="title">Добавить файл</span>
        <input name="myFile" type="file" onChange={onChange} />
      </label>
    </div>
  )
}

export default AttachFile