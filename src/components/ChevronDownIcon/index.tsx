
type ChevronDownIconProps = {
  className?: string;
}

const ChevronDownIcon = ({ className }: ChevronDownIconProps) => {
  return (
    <svg
      width="10"
      height="24"
      viewBox="0 0 10 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.999878 10.0002L4.99988 14.0002L8.99988 10.0002"
        stroke="currentColor"
        strokeWidth="1.71429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronDownIcon;
