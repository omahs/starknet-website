import React from "react";
import { Stack } from "src/libs/chakra-ui";
import { Meta } from "@storybook/react";
import { Alert } from "./Alert";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import theme from "src/style/theme";
import { ChakraProvider } from "@chakra-ui/react"

export default {
  title: "starknet.io/Alert",
  component: Alert,
  decorators: [
    (Story: React.ComponentType) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ]
} as Meta<typeof Alert>;

export const Red = () => (
  <ThemeProvider>
    <Stack direction={'column'} spacing='24px'>
      <>
        <Alert variant="red" title="Alert:">Red alert</Alert>
      </>
    </Stack>
  </ThemeProvider>
);

export const Orange = () => (
  <ThemeProvider>
    <Stack direction={'column'} spacing='24px'>
      <>
        <Alert variant="orange" title="Information:">Orange alert</Alert>
      </>
    </Stack>
  </ThemeProvider>
);

export const Blue = () => (
  <ThemeProvider>
    <Stack direction={'column'} spacing='24px'>
      <>
        <Alert variant="blue" title="Information:">This is where you would add some informative copy for the user, links look <a target="_blank" rel="noreferrer" href="https://google.com">like this.</a></Alert>
      </>
    </Stack>
  </ThemeProvider>
);