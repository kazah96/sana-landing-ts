import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import style from './style.module.css'
import SEO from '../seo'

class ArticleTemplate extends PureComponent {
  render() {
    const { content, title } = this.props.pathContext

    return (
      <>
        <SEO lang="en" title={title} description={content.slice(0, 40)} />
        <ReactMarkdown className={style["markdown-field"]} source={content} />
      </>
    )
  }
}

export default ArticleTemplate
