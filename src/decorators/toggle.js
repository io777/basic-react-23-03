import React from 'react'

export default OriginalComponent => class DecoratedComponent extends React.Component {
  state = {
    showItem: false
  }

  visibleItem = () => {
    this.setState({
      showItem: !this.state.showItem
    })
  }

  render() {
    return <OriginalComponent {...this.props}
                              visibleItem = {this.visibleItem}
                              showItem = {this.state.showItem}
    />
  }
}