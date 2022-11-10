import styled, { css } from "styled-components";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  df?: boolean | undefined;
}

export default function Container({ children, df }: ContainerProps) {
  return <Div df={df ? true : false}>{children}</Div>;
}

const Div = styled.div<ContainerProps>`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 635px) {
    padding: 0 10px;
  }

  ${(p) =>
    p.df &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;
