import React, { PureComponent } from 'react';
import Comment from './comments';
import listSwitcher from '../decorators/listSwitcher'

class Article extends PureComponent {

    render() {
        const { article, isOpen, toggleOpen } = this.props

        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick = {() => toggleOpen(article.id)}>{isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article, isOpen, openList, toggleList } = this.props

        if (!isOpen) return null

        return (
            <div>
              <section>
                {article.text}
              </section>
              <Comment article = {article}
                       isOpenList = {openList}
                       toggleListOpen = {toggleList}
              />
            </div>
        )
    }

}

export default listSwitcher(Article)