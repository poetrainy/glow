function SvgComponent(props: any) {
  return (
    <svg
      width={22}
      height={18}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 2L7.478 15 2 9.312"
        stroke="url(#paint0_linear_547_114)"
        strokeWidth={3}
      />
      <defs>
        <linearGradient
          id="paint0_linear_547_114"
          x1={2}
          y1={8.5}
          x2={20}
          y2={8.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81D6EE" />
          <stop offset={0.546875} stopColor="#BCC5E3" />
          <stop offset={1} stopColor="#FCB6BE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
