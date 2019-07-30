import React from 'react'
import $ from 'jquery'

import Color from '../../style/theme'

export default class MaClass extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      version: '0.0.0'
    }

    this.initState(props)
  }

  initState (props) {
    Object.assign(this.state, {})
  }

  componentWillReceiveProps (props) {
    this.initState(props)
  }

  componentWillMount () {
    $.ajax({
      method: 'GET',
      url: '/app/version',
      success: (version) => {
        this.setState({
          version: version
        })
      }
    }).fail((response) => {
      let text = response.responseJSON.err
      console.error(text)
    })
  }
  render () {
    return (
      <div className="footer" style={style.div}>
        <p style={style.version}>SLbots</p>
        <p style={style.feedback}>TorrentZ</p>
        <p style={style.author}>@Telegram</p>
      </div>
    )
  }
}

const style = {
  div: {
    display: 'flex',
    marginTop: '20px'
  },
  version: {
    flex: '1',
    textAlign: 'center',
    color: Color.grey
  },
  feedback: {
    flex: '1',
    textAlign: 'center',
    color: Color.grey
  },
  author: {
    flex: '1',
    textAlign: 'center',
    color: Color.grey
  }
}
