interface PropsCreditCardIcon {
  name: string;
  limit: number;
  color: string;
}

export default function CreditCardIcon(
  { name, color, limit }: PropsCreditCardIcon = {
    name: "NOME DO CARTÃO",
    limit: 0,
    color: "#00C5A2",
  },
) {
  return (
    <svg
      width={340}
      height={210}
      viewBox="0 0 340 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={340} height={210} rx={16} fill="url(#card_gradient)" />
      <rect width={340} height={210} rx={16} fill="white" fillOpacity={0.05} />
      <text
        fill="white"
        fillOpacity={0.8}
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Manrope, sans-serif"
        fontSize={10}
        fontWeight="bold"
        letterSpacing="0.05em"
      >
        <tspan x={24} y={32}>
          {"ORGANIZA GRANA"}
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Manrope, sans-serif"
        fontSize={20}
        fontWeight={600}
        letterSpacing="0.02em"
      >
        <tspan x={24} y={60}>
          {name}
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="monospace"
        fontSize={24}
        fontWeight={500}
        letterSpacing="0.2em"
      >
        <tspan x={24} y={100}>
          {
            "\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022"
          }
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="monospace"
        fontSize={24}
        fontWeight={500}
        letterSpacing="0.2em"
      >
        <tspan x={24} y={128}>
          {"\u2022\u2022\u2022\u2022"}
        </tspan>
      </text>
      <text
        fill="white"
        fillOpacity={0.6}
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Manrope, sans-serif"
        fontSize={8}
        fontWeight={600}
        letterSpacing="0.05em"
      >
        <tspan x={24} y={165}>
          {"CART\xC3O"}
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Manrope, sans-serif"
        fontSize={14}
        fontWeight={600}
        letterSpacing="0.02em"
      >
        <tspan x={24} y={185}>
          R$ {limit}
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Manrope, sans-serif"
        fontSize={14}
        fontWeight={600}
        letterSpacing="0.02em"
      >
        <tspan x={275} y={185}>
          {"--/--"}
        </tspan>
      </text>
      <g opacity={0.9}>
        <path
          d="M295 35C298.5 38.5 300.5 43 300.5 48C300.5 53 298.5 57.5 295 61"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M290 39.5C292.5 42 294 45 294 48C294 51 292.5 54 290 56.5"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M285 44C286.5 45 287.5 46.5 287.5 48C287.5 49.5 286.5 51 285 52"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="card_gradient"
          x1={0}
          y1={0}
          x2={340}
          y2={210}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset={1} stopColor="#022C22" />
        </linearGradient>
      </defs>
    </svg>
  );
}
