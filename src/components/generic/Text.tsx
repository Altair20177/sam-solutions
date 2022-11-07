import styled, { css } from "styled-components";

interface TextProps {
  children: any;
  size?: number;
  bold?: boolean | undefined;
  pb?: number | null;
  pt?: number | null;
  mt?: number | null;
  mb?: number | null;
  align?: "center" | "start" | "end";
  bb?: string;
}

export default function Text({
  children,
  size = 18,
  bold,
  pb = null,
  pt = null,
  align = "start",
  bb = "",
  mt = null,
  mb = null,
}: TextProps) {
  return (
    <P
      size={size}
      bold={bold}
      pb={pb}
      pt={pt}
      mt={mt}
      mb={mb}
      align={align}
      bb={bb}
    >
      {children}
    </P>
  );
}

const P = styled.p<TextProps>`
  font-size: ${(p) => p.size}px;
  text-align: ${(p) => p.align};

  ${(p) => p.bold && "font-weight: 600;"}
  ${(p) => p.pt && `padding-top: ${p.pt}px;`}
  ${(p) => p.pb && `padding-bottom: ${p.pb}px;`}
  ${(p) => p.mt && `margin-top: ${p.mt}px;`}
  ${(p) => p.mb && `margin-bottom: ${p.mb}px;`}
  ${(p) => p.bb && `border-bottom: 1px solid ${p.bb};`}
`;
