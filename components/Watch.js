
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from 'cxs'
import { toString, upperFirst } from 'lodash'
import Meta from './Meta'

import Analog from './Analog'
import Digital from './Digital'

let id = false

class Watch extends Component {
  constructor () {
    super()
    this.state = {
      now: new Date(),
      secs: new Date().getSeconds() + 1,
      toggled: false
    }
    this.tick = this.tick.bind(this)
  }

  tick () {
    clearInterval(id)
    let now = new Date()
    let secs = this.state.secs
    if (secs % 60 !== this.state.now.getSeconds()) {
      let offset = this.state.now.getSeconds() - secs % 60
      secs = secs + offset
    }
    if (now.getSeconds() > this.state.now.getSeconds() || now.getSeconds() + 60 > this.state.now.getSeconds()) {
      secs++
    }
    this.setState({ now: now, secs: secs })
    id = setInterval(this.tick, 1000)
  }

  componentDidMount () {
    this.tick()
  }

  render () {
    const now = this.state.now
    const time = {
      hour: now.getHours(),
      min: now.getMinutes(),
      sec: now.getSeconds(),
      secs: this.state.secs
    }

    let body = <Analog time={time} />
    if (this.props.digital) body = <Digital time={time} />

    return (
      <main className={css(cx.container)}>
        <Meta />
        <article className={css(cx.watch)} children={body} />
      </main>
    )
  }
}

Watch.propTypes = {
  analog: PropTypes.bool,
  digital: PropTypes.bool
}

Watch.defaultProps = {
  analog: true
}

const cx = {
  container: {
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
    height: '100vh',
    fontFamily: 'system-ui, sans-serif',
    color: 'white',
    backgroundColor: '#111'
  },
  watch: {
    margin: 'auto'
  }
}

export default Watch
