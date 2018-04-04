//decorator === Higher Order Component
import React from 'react'

export default OriginalComponent => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleItem = openItemId => this.setState({
      openItemId: (openItemId !== this.state.openItemId) ? openItemId : null
    })

    render() {
        return <OriginalComponent {...this.props}
                                  openItemId = {this.state.openItemId}
                                  toggleItem = {this.toggleItem}
        />
    }
}