import React, { useState, useEffect } from "react"
import VideoThumb from "../components/video-thumbnail"
import { getSlugUrl } from '../utils/url'
import { api } from '../api/api'

import SEO from "../components/seo"

import Link from 'next/link'

import style from "./style.module.css"
import AddVideo from "../components/video-thumbnail/add-video"
import DraggableItem from "../components/draggable"
import Modal from "../components/modal"

import { Input, Label } from "../components/forms"

const pageTitle = "Portfolio"

if (typeof document !== "undefined" && typeof window !== "undefined") {
  let body = document.body,
    timer: any

  window.addEventListener(
    "scroll",
    function () {
      clearTimeout(timer)
      if (!body.classList.contains("disable-hover")) {
        body.classList.add("disable-hover")
      }

      timer = setTimeout(function () {
        body.classList.remove("disable-hover")
      }, 500)
    },
    false
  )
}

type Props = {

}


const Portfolio: React.FC<Props> = (props) => {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function fetchVideos() {
    const videos = await api.get('/videos');

    setVideos(videos.data)
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  // const videos = sortVideos(this.props.data.allStrapiVideo.edges)

  const onMouseOver = (e) => {
    console.log(e)
  }
  return (
    <>
      <SEO lang="en" title={pageTitle} description={"Portfolio main page"} />
      <div className={style.thumbnails_container}>
        {videos.map(({ imgUrl, webmUrl, title }, idx) => {

          return (
            <DraggableItem key={`${idx}${title}`} onMouseOver={onMouseOver}>
              <Link href={`/videos/${getSlugUrl(title)}`}>
                <a>
                  <VideoThumb
                    id={idx}
                    imgUrl={imgUrl}
                    webmUrl={webmUrl}
                    name={title}
                  />
                </a>
              </Link>
            </DraggableItem>
          )
        })}
        <AddVideo onClick={() => setShowModal(true)} />
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)}>

        THIS IS MODEAL
        <form className={style.form}>
          <Label /><Input />

        </form>
      </Modal>}
    </>
  )
}

export default Portfolio