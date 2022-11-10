import logo from "./icons/neo.svg";

import styled from "styled-components";
import Container from "../generic/Container";
import Text from "../generic/Text";

export default function Header() {
  return (
    <Head>
      <Container df>
        <Image src={logo} alt="logo" />
        <Text pl={10} size={34}>Better products - better service!</Text>
        <Text size={34} bold>
          Rublick
        </Text>
      </Container>
    </Head>
  );
}

const Image = styled.img`
  width: 80px;
`;

const Head = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid black;
`;
