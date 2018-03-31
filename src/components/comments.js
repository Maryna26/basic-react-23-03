import React, { PureComponent } from 'react'

class Comment extends PureComponent {

    render() {
      const { article, isOpenList, toggleListOpen } = this.props;

      return(
        <div>
          {article.comments ? <button onClick={() => toggleListOpen (isOpenList)}>{isOpenList ? 'Hide comments' : 'Show comments'}</button> : null}

          <ul>
            {this.getComments()}
          </ul>
        </div>
      )
    }

    getComments(){
      const { article, isOpenList } = this.props;
      if (!isOpenList) return null;

      if(article.comments){
        return article.comments.map(comment => (
          <li key = {comment.id}>
            <div>
              <h2>{comment.user}</h2>
              <section>{comment.text}</section>
            </div>
          </li>
          )
        )
      }
    }

}
export default Comment
