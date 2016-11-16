
import React from 'react'
import css from 'next/css'

const Face = ({ size, ...props }) => {
  let c = size / 2

  let hours = []
  let minutes = []

  for (let i = 0; i < 12; i++) {
    hours.push({
      rotation: i * 30
    })
  }
  for (let i = 0; i < 60; i++) {
    if (i % 5) {
      minutes.push({
        rotation: i * 6
      })
    }
  }

  return (
    <g>
      {hours.map(function (hour, i) {
        return (
          <path
            key={i}
            d={[
              'M', c, 0,
              'L', c, 5
            ].join(' ')}
            transform={'rotate(' + hour.rotation + ' ' + c + ' ' + c + ')'}
            className={css(cx.hour)}
          />
        )
      })}
      {minutes.map(function (minute, i) {
        return (
          <path
            key={i}
            d={[
              'M', c, 0,
              'L', c, 3
            ].join(' ')}
            transform={'rotate(' + minute.rotation + ' ' + c + ' ' + c + ')'}
            className={css(cx.minute)}
          />
        )
      })}
    </g>
  )
}

const cx = {
  hour: {
    fill: 'none',
    stroke: 'currentcolor',
    strokeWidth: 1.5
  },
  minute: {
    fill: 'none',
    stroke: 'currentcolor',
    strokeWidth: 0.5
  }
}

export default Face

