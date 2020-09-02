import React, { PureComponent } from "react"
import VideoThumb from "../../components/video-thumbnail"
import { getSlugUrl } from '../../utils/url'

import SEO from "../../components/seo"

const pageTitle = "Portfolio"
import Link from 'next/link'

import style from "./style.module.css"

function sortVideos(edges) {
  return edges.sort((a, b) => {
    if (a.node.orderby > b.node.orderby) return 1
    if (a.node.orderby < b.node.orderby) return -1
    return 0
  })
}

const videoExtension = "webm"

if (typeof document !== "undefined" && typeof window !== "undefined") {
  var body = document.body,
    timer

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

class Portfolio extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      images: {}
    }

  }

  getVideoWebmImg = video => {
    const localImage = this.state.images[video.local_image_name]

    if (localImage) {
      return [localImage.webm, localImage.img]
    }

    return [video.image_url, video.image_url]
  }

  render() {
    const videos = [{
      imgUrl: 'https://umirzakov.site/static/84ee5cc5de5e81ad54c1f37c3c1a1359/Beware_Intro.jpg',
      webmUrl: 'https://umirzakov.site/static/fbc080874ef31c90dd427a9b051ee4e5/Beware_Intro.webm',
      title: "titel"
    }]
    // const videos = sortVideos(this.props.data.allStrapiVideo.edges)

    const thumbClass = style.thumbnails_container

    return (
      <>
        <SEO lang="en" title={pageTitle} description={"Portfolio main page"} />
        <div className={thumbClass}>
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
}

export default Portfolio