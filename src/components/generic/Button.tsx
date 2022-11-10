import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  callback: () => void;
  size?: "xs" | "sm" | "md";
  buttonType?: "checkout" | "pagination" | "buy";
}

export default function Button({
  children,
  callback,
  size = "sm",
  buttonType = "pagination",
}: ButtonProps) {
  return (
    <Wrapper size={size} buttonType={buttonType} onClick={callback}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ size: string; buttonType: string }>`
  border-radius: 3px;
  border: 1px solid black;
  transition: 0.3s;

  padding: ${(p) =>
    p.size === "xs" ? "5px 5px" : p.size === "sm" ? "5px 13px" : "10px 5px"};

  ${(p) => p.buttonType === "checkout" && `width: 100%;`}

  &:hover {
    color: white;
    background: black;

    ${(p) => p.buttonType === "buy" && `letter-spacing: 4px;`}
  }
`;
