import { Box } from "src/libs/chakra-ui";
import React from "react";

type Props = {
  children: React.ReactNode;
  padding?: string;
  borderRadius?: string;
};

export const CardGradientBorder = ({
  children,
  padding = "8",
  borderRadius = "24px",
}: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="card-br"
      padding={`${padding}px`}
      bg="card-bg"
      borderRadius={{ base: borderRadius }}
      transition=" all 0.5s ease"
      _hover={{
        background:
          "linear-gradient(white, white) padding-box,linear-gradient(200deg, #C507E4, #5C94FF) ",
        borderColor: "transparent",
      }}
    >
      {children}
    </Box>
  );
};
