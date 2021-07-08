import { FC } from 'react'

interface Props {
  className?: string
}

const Moon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.028 20C14.944 20 10.013 15.075 10.013 9C10.013 5.342 11.809 2.11 14.56 0.11C14.054 0.045 13.541 0 13.017 0C6.38 0 1 5.373 1 12C1 18.627 6.38 24 13.017 24C16.595 24 19.799 22.429 22 19.951C21.679 19.979 21.356 20 21.028 20Z"
      fill="black"
    />
  </svg>
)

export default Moon
