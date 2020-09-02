import React, { useState, useEffect } from "react"
import VideoThumb from "../components/video-thumbnail"
import { getSlugUrl } from '../utils/url'
import { api} from '../api/api'

import SEO from "../components/seo"

import Link from 'next/link'

import style from "./style.module.css"
import AddVideo from "../components/video-thumbnail/add-video"

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

  async function fetchVideos() {
    const videos = await api.get('/videos');

    setVideos(videos.data)
  }

  useEffect(() => {
      fetchVideos()
  }, [])

  // const videos = sortVideos(this.props.data.allStrapiVideo.edges)

  return (
    <>
      <SEO lang="en" title={pageTitle} description={"Portfolio main page"} />
      <div className={ style.thumbnails_container}>
        <AddVideo />
        {videos.map(({ imgUrl, webmUrl, title }, idx) => {

          return (
            <Link key={`${idx}${title}`} href={`/videos/${getSlugUrl(title)}`}>
              <a>
                <VideoThumb
                  id={idx}
                  imgUrl={imgUrl}
                  webmUrl={webmUrl}
                  name={title}
                />
              </a>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Portfolio