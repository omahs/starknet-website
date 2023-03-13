import { Box, BoxProps } from "src/libs/chakra-ui";
import React from "react";

interface BorderRadius {
  base: string;
  md?: string;
  lg?: string;
}
type Props = {
  children: React.ReactNode;
  padding?: string;
  borderRadius?: BorderRadius;
} & BoxProps;

export const CardGradientBorder = ({
  children,
  padding = "8",
  borderRadius = { base: "24px" },
  ...rest
}: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="card-br"
      padding={`${padding}px`}
      bg="card-bg"
      borderRadius={borderRadius}
      _hover={{
        boxShadow:
          "0px 0px 15px -3px rgba(0, 0, 0, 0.2);",
        border: "1px solid #5C94FF"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
