import React from 'react'

export default OriginalComponent => class toggleComponent extends React.Component {
  state = {
    showItem: false
  }

  visibleItem = () => {
    this.setState({
      showItem: !this.state.showItem
    })
  }

  render() {
    return <toggleComponent {...this.props}
                              visibleItem = {this.visibleItem}
                              showItem = {this.state.showItem}
    />
  }
}