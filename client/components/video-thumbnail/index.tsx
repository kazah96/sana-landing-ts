import React, { PureComponent } from "react"
import style from "./style.module.css"
import cn from "classnames"
import Thumbnail from './thumbnail'

type Props = {
  id: number
  imgUrl: string,
  webmUrl: string,
  name: string,
  defaultActive?: boolean
}

type State = {
  isLoading: boolean
}

class VideoThumbnail extends PureComponent<Props, State> {
  video: React.RefObject<any>
  timer: NodeJS.Timeout

  constructor(props) {
    super(props)

    this.video = React.createRef()
    this.checkReady()
    this.timer = setInterval(() => {
      this.checkReady()
    }, 700)
  }

  state = {
    isLoading: true
  }

  hasLoaded = () => {
    clearInterval(this.timer)
    this.setState({ isLoading: false })
  }

  checkReady = () => {
    const vid = this.video.current
    if (vid) {
      if (vid.readyState > 3) {
        this.hasLoaded()
      }
    }
  }

  onMouseEnter = () => {
    const vid = this.video.current
    if (vid) {
      vid.play()
    }
  }

  onMouseLeave = () => {
    const vid = this.video.current
    if (vid) {
      vid.pause()
    }
  }

  onLoad = () => {
    this.hasLoaded()
  }

  render() {
    const { imgUrl, webmUrl, name } = this.props
    const { isLoading } = this.state
    const videoClass = cn(style.img, { [style.hide]: isLoading })

    return (
      <Thumbnail onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <video
          ref={this.video}
          onError={
            this.hasLoaded
          } /* Костыль для того чтоб на айфоне лоадер отрабатывал нормально. Нужно пофиксить в дальнейшем*/
          onCanPlayThrough={this.onLoad}
          onCanPlay={this.onLoad}
          loop={true}
          poster={imgUrl}
          muted={true}
          className={videoClass}
        >
          <source src={webmUrl} />
          <source src={imgUrl} />
          {/* Костыль для того чтоб на айфоне лоадер отрабатывал нормально. Нужно пофиксить в дальнейшем*/}
        </video>
        <div className={style.label}>{name}</div>
      </Thumbnail>
    )
  }
}

export default VideoThumbnail
