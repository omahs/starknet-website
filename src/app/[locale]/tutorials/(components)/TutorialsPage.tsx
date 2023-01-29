"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Button,
  Flex,
  VStack,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";
import { useHits, useRefinementList } from "react-instantsearch-hooks";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import * as GridCard from "@ui/Card/GridCard";
import { Tag } from "@ui/Tag/Tag";

export interface AutoProps {
  readonly params: {
    readonly locale: string;
  };
}

export interface Props extends AutoProps {
  readonly env: {
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function TutorialsPage({ params, env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch searchClient={searchClient} indexName="web_tutorials_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
        />

        <PageLayout
          sectionHeaderTitle="Tutorials"
          sectionHeaderDescription="Learning material for developers, by developers."
          breadcrumbs={
            <Breadcrumb separator="->">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                  Parent
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" href="#">
                  Jobs
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          pageLastUpdated="Page last updated 21 Nov 2023"
          leftAside={
            <Box minH="xs" display={{ base: "none", lg: "block" }}>
              <CustomDifficulty />
              <CustomType />
            </Box>
          }
          main={
            <Box>
              <CustomHits />
            </Box>
          }
        />
      </InstantSearch>
    </Box>
  );
}

function CustomDifficulty() {
  const { items, refine } = useRefinementList({
    attribute: "difficulty",
    sortBy: ["name:asc"],
  });
  console.log("Role", items);
  return (
    <Box>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Role
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refine(item.value)}
            key={i}
          >
            {item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

function CustomType() {
  const { items, refine } = useRefinementList({
    attribute: "type",
    sortBy: ["name:asc"],
  });
  console.log("type", items);
  return (
    <Box mt={8}>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Type
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            variant={item.isRefined ? "filterActive" : "filter"}
            size="sm"
            onClick={() => refine(item.value)}
            key={i}
          >
            {item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

type Tutorial = {
  readonly id?: string;
  readonly type: "youtube" | "blog" | "github";
  readonly url: string;
  readonly image?: string;
  readonly title: string;
  readonly author?: string;
  readonly published_at: string;
  readonly difficulty?: "beginner" | "intermediate" | "advanced";
  readonly tags?: string;
  readonly locale: string;
  readonly filepath: string;
};

type HitProps = {
  readonly hits: readonly Tutorial[];
};
function CustomHits() {
  const { hits }: HitProps = useHits();
  console.log(hits);

  return (
    <>
      <Flex gap={4} direction="row" flex={1}>
        {hits.map((hit, i) => {
          let tags: string[] = [];
          if (hit.difficulty) tags.push(hit.difficulty);
          if (hit.type) tags.push(hit.type);
          return (
            <GridCard.Root href={hit.url} key={hit.title}>
              <GridCard.Image url={hit.image} />
              <GridCard.Body>
                <GridCard.Category
                  category={{ id: "github", label: "Github" }}
                />
                <GridCard.Content title={hit.title} />
              </GridCard.Body>
              <GridCard.Footer>
                <HStack spacing="8px">
                  <Tag variant="listCard">Ethereum </Tag>
                  <Tag variant="listCard">Account abstraction </Tag>
                </HStack>
              </GridCard.Footer>
            </GridCard.Root>
          );
        })}
      </Flex>
      {/* {hits.map((hit, i) => (
          <ArticleCard.Root href="$" key={i}>
            <ArticleCard.Image url={`/static/${hit.image}`} />

            <ArticleCard.Body>
              <ArticleCard.Category category={hit?.category} />
              <ArticleCard.Content title={hit.title} excerpt={hit.short_desc} />
            </ArticleCard.Body>
            <ArticleCard.Footer
              postType="audio"
              publishedAt="Nov 24, 2022"
              duration="1hr 2mins"
            />
          </ArticleCard.Root>
        ))} */}

      {/* <HStack mt="24">
        <Divider />
        <Button flexShrink={0} variant="secondary">
          View More
        </Button>
        <Divider />
      </HStack> */}
    </>
  );
}
