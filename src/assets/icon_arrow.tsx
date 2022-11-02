function SvgComponent(props: any) {
  return (
    <svg
      width={19}
      height={16}
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 8h17M9.272 1L17 8l-7.728 7"
        stroke="#555555"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgComponent;
