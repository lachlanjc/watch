
import React, { PropTypes } from 'react'
import css from 'next/css'
import Face from './Face'

const Analog = ({ time }) => {
  const {
    hour,
    min,
    sec,
    secs
  } = time

  const size = 64
  const c = 32

  const hn = hour % 12 * 30 + min / 2
  const mn = min * 6 + sec * 0.1
  const sn = (secs + 1) * 6

  const secStyle = {
    WebkitTransformOrigin: c + 'px ' + c + 'px',
    WebkitTransform: 'rotate(' + sn + 'deg)',
    transform: 'rotate(' + sn + 'deg)',
    transformOrigin: c + 'px ' + c + 'px',
    transitionProperty: 'transform',
    transitionDuration: '1s',
    transitionTimingFunction: 'linear'
  }

  return (
    <svg
      viewBox={[0, 0, size, size].join(' ')}
      className={css(cx.svg)}
    >
      <Face size={size} />
      <g
        transform={`rotate(${hn} ${c} ${c})`}
        className={css(cx.hour)}>
        <path
          d={[
            'M', c, c,
            'L', c, c / 2
          ].join(' ')}
          className={css(cx.hourInner)}
        />
        <path
          d={[
            'M', c, c - 6,
            'L', c, 14
          ].join(' ')}
          className={css(cx.hourOuter)}
        />
      </g>
      <g
        transform={`rotate(${mn} ${c} ${c})`}
        className={css(cx.min)}>
        <path
          d={[
            'M', c, c,
            'L', c, c / 2
          ].join(' ')}
          className={css(cx.minInner)}
        />
        <path
          d={[
            'M', c, c - 6,
            'L', c, 5
          ].join(' ')}
          className={css(cx.minOuter)}
        />
      </g>
      <circle
        cx={c}
        cy={c}
        r={2}
        fill='currentcolor'
      />
      <path
        d={[
          'M', c, c + 8,
          'L', c, 0
        ].join(' ')}
        style={secStyle}
        className={css(cx.sec)}
      />
      <circle
        cx={c}
        cy={c}
        r={1.25}
        className={css(cx.secCircle)}
      />
      <circle
        cx={c}
        cy={c}
        r={0.75}
        fill='#000'
      />
    </svg>
  )
}

Analog.propTypes = {
  time: PropTypes.object.isRequired
}

const cx = {
  svg: {
    width: '100%',
    height: '100%',
    maxWidth: '75vw',
    maxHeight: '66vh'
  },
  hour: {
    fill: 'none',
    stroke: 'currentcolor'
  },
  hourInner: {
    strokeWidth: 1
  },
  hourOuter: {
    strokeWidth: 2.5,
    strokeLinecap: 'round'
  },
  min: {
    fill: 'none',
    stroke: 'currentcolor'
  },
  minInner: {
    strokeWidth: 1
  },
  minOuter: {
    strokeWidth: 2.5,
    strokeLinecap: 'round'
  },
  sec: {
    fill: 'none',
    stroke: '#ff4136',
    strokeWidth: 0.5
  },
  secCircle: {
    fill: '#ff4136'
  }
}

export default Analog
