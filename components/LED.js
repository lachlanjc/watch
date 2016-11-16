
import React from 'react'
import css from 'next/css'

const LED = ({
  number = 0,
  size = 64,
  pad = 8,
  stroke = 8,
  fill = 'currentcolor'
}) => {
  const c = size / 2
  const x = pad
  const sx = size - pad

  let s = {}

  switch (number) {
    case 0:
      s = {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true
      }
      break
    case 1:
      s = {
        b: true,
        c: true
      }
      break
    case 2:
      s = {
        a: true,
        b: true,
        d: true,
        e: true,
        g: true
      }
      break
    case 3:
      s = {
        a: true,
        b: true,
        c: true,
        d: true,
        g: true
      }
      break
    case 4:
      s = {
        b: true,
        c: true,
        f: true,
        g: true
      }
      break
    case 5:
      s = {
        a: true,
        c: true,
        d: true,
        f: true,
        g: true
      }
      break
    case 6:
      s = {
        a: true,
        c: true,
        d: true,
        e: true,
        f: true,
        g: true
      }
      break
    case 7:
      s = {
        a: true,
        b: true,
        c: true
      }
      break
    case 8:
      s = {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true,
        g: true
      }
      break
    case 9:
      s = {
        a: true,
        b: true,
        c: true,
        d: true,
        f: true,
        g: true
      }
      break
    default:
      s.g = true
  }

  const cx = {
    a: {
      opacity: s.a ? 1 : 0.125
    },
    b: {
      opacity: s.b ? 1 : 0.125
    },
    c: {
      opacity: s.c ? 1 : 0.125
    },
    d: {
      opacity: s.d ? 1 : 0.125
    },
    e: {
      opacity: s.e ? 1 : 0.125
    },
    f: {
      opacity: s.f ? 1 : 0.125
    },
    g: {
      opacity: s.g ? 1 : 0.125
    }
  }

  return (
    <svg
      viewBox={[0, 0, size, size].join(' ')}
      width={size} height={size}
      fill={fill}
    >
      <path
        className={css(cx.a)}
        d={[
          'M', x + stroke / 2, 0,
          'L', sx - stroke / 2, 0,
          'L', sx - stroke - stroke / 2, stroke,
          'L', x + stroke + stroke / 2, stroke,
          'z'
        ].join(' ')}
      />
      <path
        className={css(cx.b)}
        d={[
          'M', sx, 0,
          'L', sx, c,
          'L', sx - stroke, c - stroke,
          'L', sx - stroke, stroke,
          'z'
        ].join(' ')}
      />
      <path
        className={css(cx.c)}
        d={[
          'M', sx, c,
          'L', sx, size,
          'L', sx - stroke, size - stroke,
          'L', sx - stroke, c + stroke,
          'z'
        ].join(' ')}
      />
      <path
        className={css(cx.d)}
        d={[
          'M', sx - stroke - stroke / 2, size - stroke,
          'L', sx - stroke / 2, size,
          'L', x + stroke / 2, size,
          'L', x + stroke + stroke / 2, size - stroke,
          'z'
        ].join(' ')}
      />
      <path
        className={css(cx.e)}
        d={[
          'M', x, c,
          'L', x + stroke, c + stroke,
          'L', x + stroke, size - stroke,
          'L', x, size,
          'z'
        ].join(' ')}
      />
      <path
        className={css(cx.f)}
        d={[
          'M', x, 0,
          'L', x + stroke, stroke,
          'L', x + stroke, c - stroke,
          'L', x, c,
          'z'
        ].join(' ')}
      />
      <path
        className={css(cx.g)}
        d={[
          'M', x + stroke / 2, c,
          'L', x + stroke, c - stroke / 2,
          'L', sx - stroke, c - stroke / 2,
          'L', sx - stroke / 2, c,
          'L', sx - stroke, c + stroke / 2,
          'L', x + stroke, c + stroke / 2,
          'z'
        ].join(' ')}
      />
    </svg>
  )
}

export default LED
