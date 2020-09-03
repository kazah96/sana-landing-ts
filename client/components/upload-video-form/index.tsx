import React, { useState } from "react"

import style from "./style.module.css"
import Modal from "../modal"

import { Input, Label, Form, InputGroup, Button, AttachFile } from "../forms"

type Props = {
  show: boolean
  onClose: () => void
}

const UploadVideoForm: React.FC<Props> = ({show, onClose}) => {
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
                <AttachFile />
              </InputGroup>
              <Button text="Загрузить" onClick={() => { }} />
            </Form>
          </div>
        </div>
      </Modal>}
    </>
  )
}

export default UploadVideoForm