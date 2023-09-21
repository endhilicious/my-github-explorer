import React from 'react'

interface LeftArrowIconProps {
  color?: string;
  height?: string;
  width?: string;
}


const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({
  color = '#ffffff',
  height = '24',
  width = '24',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0002 38C20.5122 38 21.0232 37.805 21.4142 37.414C22.1953 36.633 22.1953 35.367 21.4142 34.586L10.8279 23.9999L21.4142 13.4138C22.1953 12.6328 22.1953 11.3668 21.4142 10.5858C20.6332 9.80475 19.3672 9.80475 18.5861 10.5858L6.58577 22.5859C5.80474 23.3669 5.80474 24.6329 6.58577 25.4139L18.5861 37.414C18.9772 37.805 19.4882 38 20.0002 38Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 26H40C41.104 26 42 25.105 42 24C42 22.895 41.104 22 40 22H10C8.896 22 8 22.895 8 24C8 25.105 8.896 26 10 26Z"
        fill={color}
      />
    </svg>

  )
}

export default LeftArrowIcon