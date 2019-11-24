/** @jsx jsx */
import { Box, Flex, Grid, Heading, Text } from "@theme-ui/components";
import { graphql } from "gatsby";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { jsx } from "theme-ui";

import { GridSlider } from "../components/grid-slider";
import { EventCard } from "../components/home-events/event-card";
import { HomepageHero } from "../components/homepage-hero";
import { KeynotersSection } from "../components/keynoters-section";
import { Link } from "../components/link";
import { MapWithLink } from "../components/map-with-link";
import { Marquee } from "../components/marquee";
import { SponsorsSection } from "../components/sponsors-section";
import { YouTubeLite } from "../components/youtube-lite";
import { HomePageQuery } from "../generated/graphql";

const formatDeadlineDate = (datetime: string) => {
  const d = new Date(datetime);

  const formatter = new Intl.DateTimeFormat("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatter.format(d);
};

const formatDeadlineTime = (datetime: string) => {
  const d = new Date(datetime);

  const formatter = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });

  return formatter.format(d);
};

export default ({ data }: { data: HomePageQuery }) => {
  const {
    backend: { conference },
  } = data;

  return (
    <Fragment>
      <FormattedMessage id="home.title">
        {text => (
          <Helmet>
            <title>{text}</title>
          </Helmet>
        )}
      </FormattedMessage>

      <HomepageHero />

      <Marquee message={conference.marquee!} />

      <Grid
        sx={{
          py: 5,
          px: 2,
          maxWidth: "container",
          mx: "auto",
          gridTemplateColumns: [null, "8fr 12fr"],
        }}
      >
        <Heading as="h1" variant="caps">
          {conference.name}
        </Heading>

        <Box>
          <Heading as="h2" sx={{ color: "purple", fontSize: 3, mb: 3 }}>
            {conference.introTitle}
          </Heading>

          <Text as="p" sx={{ mb: 3 }}>
            {conference.introText}
          </Text>
        </Box>
      </Grid>

      <KeynotersSection />

      <Grid
        sx={{
          py: 5,
          px: 2,
          maxWidth: "container",
          mx: "auto",
          gridTemplateColumns: [null, null, "10fr 2fr 9fr"],
        }}
      >
        <Box>
          <Box sx={{ border: "primary", position: "relative" }}>
            <Box sx={{ paddingBottom: "55%", display: "inline-block" }} />
            <YouTubeLite
              videoId="FOBlor9yzP0"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ gridColumnStart: [null, null, 3] }}>
          <Heading as="h1" sx={{ mb: 3 }}>
            {conference.proposalsTitle}
          </Heading>

          {conference.cfpDeadline && (
            <Flex sx={{ border: "primary", mb: 3 }}>
              <Box
                sx={{
                  flex: 1,
                  p: 3,
                  textAlign: "center",
                  borderRight: "primary",
                }}
              >
                <Heading variant="caps" color="violet">
                  <FormattedMessage id="home.cfp.begins" />
                </Heading>
                <Box>{formatDeadlineDate(conference.cfpDeadline.start)}</Box>
                <Box sx={{ fontSize: 0 }}>
                  {formatDeadlineTime(conference.cfpDeadline.start)}
                </Box>
              </Box>
              <Box sx={{ flex: 1, p: 3, textAlign: "center" }}>
                <Heading variant="caps" color="orange">
                  <FormattedMessage id="home.cfp.deadline" />
                </Heading>
                <Box>{formatDeadlineDate(conference.cfpDeadline.end)}</Box>
                <Box sx={{ fontSize: 0 }}>
                  {formatDeadlineTime(conference.cfpDeadline.end)}
                </Box>
              </Box>
            </Flex>
          )}

          <Heading as="h2" sx={{ color: "yellow", fontSize: 3, mb: 3 }}>
            {conference.proposalsSubtitle}
          </Heading>

          <Text as="p" sx={{ mb: 4 }}>
            {conference.proposalsText}
          </Text>

          <Link href="/:language/cfp" variant="button">
            <FormattedMessage id="home.cfp.getInvolved" />
          </Link>
        </Box>
      </Grid>

      {conference.events.length > 0 && (
        <GridSlider
          title={<FormattedMessage id="home.conferenceHighlights" />}
          items={conference.events}
          Component={EventCard}
        />
      )}

      <Box
        sx={{
          borderBottom: "primary",
        }}
      >
        <Grid
          sx={{
            py: 5,
            px: 2,

            gridTemplateColumns: [null, null, "8fr 2fr 10fr"],

            maxWidth: "container",
            mx: "auto",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Heading as="h1">
              <FormattedMessage id="home.gettingThere" />
            </Heading>
            <Text
              sx={{
                mt: 4,
                mb: 3,
              }}
              as="p"
            >
              {conference.gettingThereText}
            </Text>

            <Box>
              <Link
                target="_blank"
                variant="button"
                href={conference.map!.link!}
              >
                <FormattedMessage id="home.findRoute" />
              </Link>
            </Box>
          </Flex>

          <MapWithLink />
        </Grid>
      </Box>

      <Box sx={{ borderBottom: "primary" }}>
        <Box sx={{ py: 4 }}>
          <Heading
            as="h1"
            sx={{
              px: 2,
              maxWidth: "container",
              mx: "auto",
            }}
          >
            Sponsors
          </Heading>
        </Box>
      </Box>

      <SponsorsSection
        sx={{ mt: 5, pb: 5, borderBottom: "primary" }}
        sponsorsByLevel={conference.sponsorsByLevel}
      />

      <Grid
        columns={[1, 2]}
        sx={{ px: 2, maxWidth: "container", mx: "auto", display: "none" }}
      >
        <Box sx={{ py: 5, borderRight: [null, "primary"] }}>
          <Heading sx={{ fontSize: 5, mb: 4 }}>Keep up to date</Heading>

          <Text variant="prefooter">
            Nulla non orci eu magna sagittis finibus. Donec sed nunc magna. Sed
            nec tincidunt elit, nec ultrices arcu. In massa eros, dignissim eget
            leo nec, sodales fringilla ante.
          </Text>
        </Box>
        <Box sx={{ py: 5, pl: [0, 4] }}>
          <Heading sx={{ fontSize: 5, mb: 4 }}>FAQs</Heading>

          <Text variant="prefooter">
            Nulla non orci eu magna sagittis finibus. Donec sed nunc magna. Sed
            nec tincidunt elit, nec ultrices arcu. In massa eros, dignissim eget
            leo nec, sodales fringilla ante.
          </Text>
        </Box>
      </Grid>
    </Fragment>
  );
};

export const query = graphql`
  query HomePage($language: String!) {
    backend {
      conference {
        name(language: $language)
        introduction(language: $language)

        marquee: copy(key: "marquee", language: $language)
        introTitle: copy(key: "intro-title-1", language: $language)
        introText: copy(key: "intro-text-1", language: $language)

        proposalsTitle: copy(key: "proposals-title", language: $language)
        proposalsSubtitle: copy(key: "proposals-subtitle", language: $language)
        proposalsText: copy(key: "proposals-text", language: $language)

        gettingThereText: copy(key: "getting-there-text", language: $language)

        map {
          link
        }

        cfpDeadline: deadline(type: "cfp") {
          start
          end
        }

        faqs {
          question(language: $language)
          answer(language: $language)
        }

        events {
          id
          title
          locationName
          image
          start
          imageFile {
            childImageSharp {
              fixed(grayscale: true, width: 600, height: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }

        sponsorsByLevel {
          level
          highlightColor
          sponsors {
            name
            link
            image
            imageFile {
              childImageSharp {
                fluid(
                  fit: CONTAIN
                  maxWidth: 800
                  maxHeight: 500
                  background: "transparent"
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
