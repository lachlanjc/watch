
import React, { PropTypes } from 'react'
import css from 'next/css'
import { padStart } from 'lodash'

import LED from './LED'

const Digital = ({ time, props }) => {
  const { hour, min, sec, secs } = time

  return (
    <div>
      <div className={css(cx.digital)}>
        {hour % 12}:{padStart(min, 2, '0')}:{padStart(sec, 2, '0')} {hour % 12 ? 'pm' : 'am'}
      </div>
      <pre className={css(cx.pre)}>
        {sec} sec / {secs % 60}.{secs} secs / {Math.floor(secs / 60)} elapsed minutes
      </pre>
      <div className={css(cx.led)}>
        <LED number={Math.floor(hour / 10)} />
        <LED number={hour % 10} />
        <LED number={Math.floor(min / 10)} />
        <LED number={min % 10} />
        <LED number={Math.floor(sec / 10)} />
        <LED number={sec % 10} />
      </div>
    </div>
  )
}

Digital.propTypes = {
  time: PropTypes.object.isRequired
}

const cx = {
  digital: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    fontWeight: 'bold',
    fontSize: 20
  },
  pre: {
    fontFamily: 'SF-Mono, "Roboto Mono", "Source Code Pro", Menlo, Consolas, monospace'
  },
  led: {
    color: 'red',
    marginTop: 32
  }
}

export default Digital

