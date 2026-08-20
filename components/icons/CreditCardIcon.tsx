interface CreditCardIconProps {
  name: string;
  description?: string;
  color?: string;
}

// Função auxiliar simples para verificar se uma cor HEX é clara
function isLightColor(color: string): boolean {
  if (!color.startsWith("#")) return false;
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  // Fórmula padrão de luminância
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155; // Retorna true se for um fundo claro
}

export function CreditCardIcon({
  name,
  description,
  color = "var(--primary)",
}: CreditCardIconProps) {
  // Define se o texto deve ser preto (#000) ou branco (#fff)
  const isLight = isLightColor(color);
  const textColor = isLight ? "#111827" : "#fff"; // Preto suave ou Branco

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={340}
      height={210}
      fill="none"
    >
      <defs>
        <filter id="a" width="140%" height="140%" x="-20%" y="-20%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="linear" />
          </feComponentTransfer>
          <feGaussianBlur result="blur" stdDeviation={12} />
          <feOffset dy={4} />
          <feComposite in2="SourceGraphic" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feComposite in2="SourceGraphic" operator="atop" />
        </filter>
      </defs>
      <rect width={340} height={210} fill={color} rx={16} />
      <rect width={340} height={210} fill={color} filter="url(#a)" rx={16} />
      {/* Camada de brilho sutil adaptada para fundos claros ou escuros */}
      <rect
        width={340}
        height={210}
        fill={isLight ? "#000" : "#fff"}
        fillOpacity={isLight ? 0.04 : 0.06}
        rx={16}
      />

      <text
        xmlSpace="preserve"
        fill={textColor}
        fillOpacity={0.85}
        fontFamily="Manrope, sans-serif"
        fontSize={10}
        fontWeight="bold"
        letterSpacing=".05em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x={24} y={32}>
          {"ORGANIZA GRANA"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill={textColor}
        fontFamily="Manrope, sans-serif"
        fontSize={20}
        fontWeight={600}
        letterSpacing=".02em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x={24} y={60}>
          {name || "NOME DO CARTÃO"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill={textColor}
        fontFamily="monospace"
        fontSize={24}
        fontWeight={500}
        letterSpacing=".2em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x={24} y={100}>
          {
            "\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022"
          }
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill={textColor}
        fontFamily="monospace"
        fontSize={24}
        fontWeight={500}
        letterSpacing=".2em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x={24} y={128}>
          {"\u2022\u2022\u2022\u2022"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill={textColor}
        fillOpacity={0.65}
        fontFamily="Manrope, sans-serif"
        fontSize={8}
        fontWeight={600}
        letterSpacing=".05em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x={24} y={165}>
          {"CART\xC3O"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill={textColor}
        fontFamily="Manrope, sans-serif"
        fontSize={14}
        fontWeight={600}
        letterSpacing=".02em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x={24} y={185}>
          {description || "Descrição"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill={textColor}
        fontFamily="Manrope, sans-serif"
        fontSize={14}
        fontWeight={600}
        letterSpacing=".02em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x={275} y={185}>
          {"--/--"}
        </tspan>
      </text>
      <g
        stroke={textColor}
        strokeLinecap="round"
        strokeWidth={2}
        opacity={0.95}
      >
        <path d="M295 35c3.5 3.5 5.5 8 5.5 13s-2 9.5-5.5 13M290 39.5c2.5 2.5 4 5.5 4 8.5s-1.5 6-4 8.5M285 44c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4" />
      </g>
    </svg>
  );
}
