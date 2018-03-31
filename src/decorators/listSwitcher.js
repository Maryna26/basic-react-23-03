import React from 'react'

export default InitialComponent => class DecoratedComponent extends React.Component {
  state = {
    openListId: null
  }

  toggleList = () => () => this.setState({openListId: !this.state.openListId})

  render(){
    return <InitialComponent {...this.props}
                             openList = {this.state.openListId}
                             toggleList = {this.toggleList()}
    />
  }
}
