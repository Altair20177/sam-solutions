import styled from "styled-components";
import Text from "./Text";

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>  {
  showMess: boolean;
}

export default function Notification({ showMess = false }: NotificationProps) {
  return (
    <Wrapper showMess={showMess}>
      <Text size={30} bold align="center">
        Thank you for the purchase!
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div<NotificationProps>`
  opacity: ${(p) => (p.showMess ? 1 : 0)};
  overflow: ${(p) => (p.showMess ? "visible" : "hidden")};
  z-index: ${(p) => (p.showMess ? 10 : -2)};

  transition: 0.6s;
  position: fixed;
  padding: 40px 60px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid black;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 635px) {
      width: 90%;
      padding: 20px 40px;
  }
`;
