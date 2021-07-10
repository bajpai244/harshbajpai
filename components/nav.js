/**@jsxImportSource theme-ui*/

import { Box, Container, Flex } from "theme-ui";
import Image from "next/image";

import logo from "../public/logo.png";

const Nav = ({ ...props }) => {
  return (
    <Container {...props} sx={{ py: [4] }}>
      <Flex
        sx={{
          alignItems: "center",
          justifyItems: "space-around",
        }}
      >
        <Image src={logo} width={64} height={64} />

        <h2
          sx={{
            flex: 1,
            textAlign: ["center"],
          }}
        >
          harsh bajpai
        </h2>
      </Flex>
    </Container>
  );
};

export default Nav;
