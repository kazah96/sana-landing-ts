import React, { useState } from "react"

import style from "./style.module.css"
import Modal from "../modal"

import { Input, Label, Form, InputGroup, Button, AttachFile } from "../forms"
import { api } from "../../api/api"

type Props = {
  show: boolean
  onClose: () => void
}

const UploadVideoForm: React.FC<Props> = ({ show, onClose }) => {
  const [file, setFile] = useState(null)

  const onChange = (e) => {
    setFile(e.target.files[0])
  }

  const onClick = () => {
    const formData = new FormData()
    formData.append('file', file)

    api.post('/api/videos/new', formData)
  }

  return (
    <>
      {show && <Modal onClose={onClose}>
        <div className={style.modal_content}>
          <div className={style.form}>
            <Form>
              <InputGroup>
                <Label text="Название видео" />
                <Input />
              </InputGroup>
              <InputGroup>
                <AttachFile onChange={onChange} />
              </InputGroup>
              <Button text="Загрузить" onClick={onClick} />
            </Form>
          </div>
        </div>
      </Modal>}
    </>
  )
}

export default UploadVideoForm