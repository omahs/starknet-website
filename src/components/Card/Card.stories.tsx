import React from "react";
import { HStack, Icon } from "src/libs/chakra-ui";
import { Meta } from "@storybook/react";
import { Card } from "./Card";
import * as GridCard from "./GridCard";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import { Tag } from "@ui/Tag/Tag";
import {
  Grid,
  Flex
} from "@chakra-ui/react";
import { ListCard } from "@ui/ListCards/ListCard";
import moment from "moment";

export default {
  title: "starknet.io/Card",
  component: Card,
} as Meta<typeof Card>;

export const Basic = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Card variant="default">Default card</Card>
        <Card 
          variant="list">List card</Card>
      </>
    </HStack>
  </ThemeProvider>
);

const hits = [
  {
      "id": "0snedu03",
      "type": "github",
      "url": "https://github.com/starknet-edu/starknet-erc721",
      "image": "fsadasdasasdasdasds",
      "title": "Starknet Edu – ERC721",
      "author": "StarkWare ",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "starknet_edu",
      "tags": [
          "cairo",
          "ERC722",
          "ERC721",
          "ERC723",
          "ERC724",
          "ERC725"
      ],
      "slug": "starknet-edu-erc721",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0snedu03.yml",
      "objectID": "tutorials:en:0snedu03.yml",
      "_highlightResult": {
          "title": {
              "value": "Starknet Edu – ERC721",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 1
  },
  {
      "id": "0snedu01",
      "type": "github",
      "url": "https://github.com/starknet-edu",
      "image": "/assets/github.png",
      "title": "Starknet Edu – Github Repo ",
      "author": "StarkWare ",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "starknet_edu",
      "tags": [
          "cairo",
          "account abstraction",
          "contracts"
      ],
      "slug": "starknet-edu-github-repo",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0snedu01.yml",
      "objectID": "tutorials:en:0snedu01.yml",
      "_highlightResult": {
          "title": {
              "value": "Starknet Edu – Github Repo ",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 2
  },
  {
      "id": "0cairows03",
      "type": "youtube",
      "url": "https://youtu.be/SA28R690pTA",
      "image": "/assets/cairows03.jpeg",
      "title": "Diving into Cairo ",
      "author": "StarkWare",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "cairo_workshops",
      "tags": [
          "cairo"
      ],
      "slug": "diving-into-cairo",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0cairows03.yml",
      "objectID": "tutorials:en:0cairows03.yml",
      "_highlightResult": {
          "title": {
              "value": "Diving into Cairo ",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 3
  },
  {
      "id": "0cairows02",
      "type": "youtube",
      "url": "https://youtu.be/51Qb3TLpNro",
      "image": "/assets/cairows02.jpeg",
      "title": "Account abstraction ",
      "author": "StarkWare",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "cairo_workshops",
      "tags": [
          "Contracts",
          "Accounts"
      ],
      "slug": "account-abstraction",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0cairows02.yml",
      "objectID": "tutorials:en:0cairows02.yml",
      "_highlightResult": {
          "title": {
              "value": "Account abstraction ",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 4
  }
];

const list = [
  {
      "type": "conference",
      "name": "Hacksummit",
      "description": "A Virtual Conference for Blockchain Developers Featuring the pioneers in our industry and supporting good causes.",
      "url": "http://2023.hacksummit.org/",
      "start_date": "2023-03-31T09:27:04.521Z",
      "end_date": "2023-04-02T09:27:04.535Z",
      "image": "/assets/hacksummit.jpg",
      "location": "online_remote",
      "tags": [
          "crypto",
          "blockchain",
          "starknet"
      ],
      "slug": "hacksummit",
      "locale": "en",
      "sourceFilepath": "_data/events/en/hacksummit.yml",
      "objectID": "events:en:hacksummit.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 1
  },
  {
      "type": "conference",
      "name": "HBC2023",
      "description": "A top student-run blockchain innovation hub.",
      "url": "https://www.harvardblockchain.xyz/",
      "start_date": "2023-03-30T09:10:27.037Z",
      "end_date": "2023-04-02T09:10:27.043Z",
      "image": "/assets/hbc23-2x.png",
      "location": "usa",
      "tags": [
          "crypto",
          "blockchain",
          "Harvard",
          "web3"
      ],
      "slug": "hbc2023",
      "locale": "en",
      "sourceFilepath": "_data/events/en/hbc2023.yml",
      "objectID": "events:en:hbc2023.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 2
  },
  {
      "type": "community_event",
      "name": "Cairo 1 and Starknet Roadmap",
      "description": "Starknet, Cairo 1 and everything about Starknet's roadmap, as well as a special guest from SNX",
      "url": "https://www.meetup.com/starknet-melbourne/events/291944115/",
      "start_date": "2023-03-30T07:50:35.618Z",
      "end_date": "",
      "image": "/assets/starknet-meetups.jpg",
      "location": "asia",
      "tags": [
          "crypto",
          "blockchain",
          "starknet",
          "australia",
          "Melbourne"
      ],
      "slug": "cairo-1-and-starknet-roadmap",
      "locale": "en",
      "sourceFilepath": "_data/events/en/cairo-1-and-starknet-roadmap.yml",
      "objectID": "events:en:cairo-1-and-starknet-roadmap.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 3
  },
  {
      "type": "conference",
      "name": "Paris Blockchain Week Summit",
      "description": "The Paris Blockchain Week Summit is a two-day event that explores the latest developments in blockchain technology and its potential applications across a range of industries.",
      "url": "https://www.parisblockchainweek.com/summit#speakers",
      "start_date": "2023-03-20T09:50:05.569Z",
      "end_date": "2023-03-24T09:50:05.575Z",
      "image": "/assets/paris_blockchain_week-summit-2x.png",
      "location": "europe",
      "tags": [
          "crypto",
          "blockchain",
          "Paris"
      ],
      "slug": "paris-blockchain-week-summit",
      "locale": "en",
      "sourceFilepath": "_data/events/en/paris-blockchain-week-summit.yml",
      "objectID": "events:en:paris-blockchain-week-summit.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 4
  }
];

export const Gridcard = () => (
  <ThemeProvider>
    <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(280px, 1fr))",
          lg: "repeat(auto-fit, minmax(280px, 1fr))",
          xl: "repeat(auto-fit, minmax(280px, 299px))",
        }}
        templateRows="1fr"
        columnGap="24px"
        rowGap="48px"
      >
        {hits.map(hit => <GridCard.Root href={hit.url} key={hit.title}>
          <GridCard.Image url={hit.image} type={hit.type} />
          <GridCard.Body>
            {/* <GridCard.Category category={hit.tags} /> */}
            <GridCard.Content
              title={hit.title}
              author={hit.author}
              date="12.03.2023"
              difficulty={hit.difficulty}
            />
          </GridCard.Body>
          <GridCard.Footer>
            <GridCard.Tags tags={hit?.tags} />
          </GridCard.Footer>
        </GridCard.Root>)}
    </Grid>
  </ThemeProvider>
);

export const Listcard = () => (
  <ThemeProvider>
    <Flex gap={4} direction="column" flex={1}>
      {list.map((hit) => {
        return (
          <ListCard
            variant="event"
            href={hit.url}
            key={hit?.name}
            startDateTime={
              hit?.end_date
                ? `${moment(hit?.start_date).format("ddd MMM DD")} - ${moment(
                    hit?.end_date,
                  ).format("ddd MMM DD, YYYY")}`
                : moment(hit?.start_date).format("ddd MMM DD, YYYY")
            }
            image={hit.image}
            title={hit.name}
            description={hit.description}
            type={hit.tags}
          />
        );
      })}
    </Flex>
  </ThemeProvider>
);
