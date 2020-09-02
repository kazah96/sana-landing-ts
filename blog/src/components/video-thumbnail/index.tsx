import React, { PureComponent } from "react"
import style from "./style.module.css"
import PropTypes from "prop-types"
import cn from "classnames"

class VideoThumbnail extends PureComponent {
  constructor(props) {
    super(props)

    this.video = React.createRef()
    this.checkReady()
    this.timer = setInterval(() => {
      this.checkReady()
    }, 700)
  }

  static propTypes = {
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    webmUrl: PropTypes.string,
    name: PropTypes.string,
    defaultActive: PropTypes.bool
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
    const thumbClass = style.thumbnail
    const videoClass = cn(style.img, { [style.hide]: isLoading })

    return (
      <span
        className={thumbClass}
        role="link"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        tabIndex={0}
      >
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
      </span>
    )
  }
}

export default VideoThumbnail
