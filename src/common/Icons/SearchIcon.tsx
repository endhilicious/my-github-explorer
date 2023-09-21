import React from 'react'

interface SearchIconProps {
  color?: string;
  height?: string;
  width?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  color = '#ffffff',
  height = '24',
  width = '24',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6711 9C27.1071 9 32.3422 14.2351 32.3422 20.6711C32.3422 23.3275 31.4504 25.7793 29.9504 27.7429L38.543 36.3366C39.1523 36.9459 39.1523 37.9337 38.543 38.543C37.9696 39.1165 37.0608 39.1502 36.4479 38.6442L36.3366 38.543L27.7429 29.9504C25.7793 31.4504 23.3275 32.3422 20.6711 32.3422C14.2351 32.3422 9 27.1071 9 20.6711C9 14.2351 14.2351 9 20.6711 9ZM20.6711 12.1699C15.9832 12.1699 12.1699 15.9832 12.1699 20.6711C12.1699 25.3591 15.9832 29.1723 20.6711 29.1723C25.3591 29.1723 29.1723 25.3591 29.1723 20.6711C29.1723 15.9832 25.3591 12.1699 20.6711 12.1699Z"
        fill={color}
      />
    </svg>
  )
}

export default SearchIcon