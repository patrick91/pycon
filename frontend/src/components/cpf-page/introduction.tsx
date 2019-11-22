import { Box, Grid, Text } from "@theme-ui/components";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Link } from "../link";

export const Introduction: React.SFC = () => (
  <Box
    sx={{
      borderTop: "primary",
      borderBottom: "primary",
    }}
  >
    <Grid
      sx={{
        maxWidth: "container",
        mx: "auto",
        px: 2,
        my: 5,
        gridTemplateColumns: [null, null, "9fr 3fr 8fr"],
      }}
    >
      <Box>
        <Text as="h1">
          <FormattedMessage id="cfp.introductionHeading" />
        </Text>
        <Text
          as="p"
          sx={{
            color: "orange",
            mt: 4,
            fontSize: 2,
          }}
        >
          <FormattedMessage id="cfp.introductionSubtitle" />
        </Text>
        <Text
          sx={{
            mt: 4,
            fontSize: 2,
          }}
          as="p"
        >
          <FormattedMessage id="cfp.introductionCopy" />
        </Text>

        <Link
          href="/:language/call-for-proposals"
          variant="button"
          sx={{ mt: 4 }}
        >
          <FormattedMessage id="cfp.learnMore" />
        </Link>
      </Box>
      <Box
        sx={{
          border: "primary",
          height: [420, 420, "auto"],
          gridColumnStart: [0, 0, 3],
        }}
      />
    </Grid>
  </Box>
);
