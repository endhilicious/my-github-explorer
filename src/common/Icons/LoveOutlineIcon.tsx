import React from 'react'

interface LoveOutlineIconProps {
  color?: string;
  height?: string;
  width?: string;
}

const LoveOutlineIcon: React.FC<LoveOutlineIconProps> = ({
  color = '#ffffff',
  height = '24',
  width = '24',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.9304 9.74923C37.9407 7.66488 35.306 6.52422 32.4951 6.52422C29.6831 6.52422 27.041 7.67225 25.0513 9.75765L24.0116 10.8467L22.9561 9.7408C20.9663 7.65645 18.3169 6.5 15.5049 6.5C12.7014 6.5 10.0593 7.64802 8.07699 9.72395C6.08727 11.8083 4.9916 14.5762 5 17.5221C5 20.468 6.10416 23.2275 8.09282 25.3118L23.2221 41.1619C23.4321 41.381 23.7139 41.5 23.9873 41.5C24.2618 41.5 24.5436 41.3894 24.7537 41.1703L39.9135 25.3466C41.9043 23.2612 43 20.4933 43 17.5474C43.0084 14.6015 41.9201 11.8336 39.9304 9.74923Z"
        fill={color}
      />
    </svg>
  )
}

export default LoveOutlineIcon