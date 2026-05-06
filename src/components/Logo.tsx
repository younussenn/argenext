interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={`argenext-logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="40"
        cy="40"
        r="37"
        fill="#0a0a0a"
        stroke="#27272a"
        strokeWidth="1.5"
        className="argenext-circle"
      />
      <path
        d="M28 58 L40 22 L52 58 M33 46 L47 46"
        stroke="#fafafa"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="argenext-letter"
      />
      <rect
        x="56"
        y="32"
        width="3"
        height="22"
        fill="#3b82f6"
        className="argenext-cursor"
      />
    </svg>
  );
}