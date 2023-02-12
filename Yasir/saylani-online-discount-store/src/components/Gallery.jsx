import React from "react";

import { Grid, GridItem, useMediaQuery, Image } from "@chakra-ui/react";
export default function Gallery() {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
    <div>
      <Grid
        h={500}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        px={isLargerThanLG ? "16" : "6"}
        bgColor={"gray.50"}
        py={6}
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Image
            boxSize={515}
            src="https://unsplash.com/photos/CEAPSFlMLbk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dmVnaXRhYmxlc3xlbnwwfDF8fHwxNjc2MTk1NTIy&force=true&w=1920"
            objectFit={"cover"}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} bg="papayawhip">
          <Image
            boxSize={515}
            src="https://unsplash.com/photos/-D09rH5sTw4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzB8fHZlZ2V0YWJsZXMlMjB0YWJsZXxlbnwwfDB8fHwxNjc2MTk1NzQx&force=true&w=2400"
            objectFit={"cover"}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg="papayawhip">
          <Image
            boxSize={515}
            src="https://unsplash.com/photos/_4_8zoWPw-8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8dmVnZXRhYmxlcyUyMHRhYmxlfGVufDB8MXx8fDE2NzYxOTYwODE&force=true&w=1920"
            objectFit={"cover"}
          />
        </GridItem>
      </Grid>
    </div>
  );
}
