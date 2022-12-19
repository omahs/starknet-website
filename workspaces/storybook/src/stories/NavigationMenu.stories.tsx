import { ComponentMeta } from "@storybook/react";
import React from "react";
import { NavigationMenu } from "@ui/NavigationMenu";
import { NavigationMenuDropdown } from "@ui/NavigationMenuDropdown";
import { CheckIcon } from "@radix-ui/react-icons";

export default {
  title: "starknet.io/NavigationMenu",
  component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

export const Primary = () => (
  <div>
    <div
      style={{
        padding: 30,
        display: "flex",
      }}
    >
      <NavigationMenu
        naviMenus={
          [
            {
              label: 'Learn',
              dropdown: (
                <NavigationMenuDropdown
                  icon={<CheckIcon />}
                  title='LEARNING HUB'
                  description='Start here for an overview of all things Starknet'
                  mainMenus={[
                    {
                      category: 'THE BASICS',
                      menus: [
                        { label: 'What is Starknet?', url: ''},
                        { label: 'Relationship with Eth', url: ''},
                        { label: 'What is the strk (token)?', url: ''},
                        { label: 'What are stark proofs?', url: ''}
                      ]
                    }, {
                      category: 'HOW STARKNET WORKS',
                      menus: [
                        { label: 'ZK rollups', url: ''},
                        { label: 'Starknet sequencers', url: ''},
                        { label: 'Starknet provers', url: ''},
                        { label: 'Concencus mechanism', url: ''},
                        { label: 'How Eth validates proofs', url: ''}
                      ]
                    }, {
                      category: 'THE FUTURE OF STARKNET',
                      menus: [
                        { label: 'Transaction throughput', url: ''},
                        { label: 'Computation', url: ''},
                        { label: 'Low fees', url: ''},
                        { label: 'Fractal scaling', url: ''},
                        { label: 'Account abstraction', url: ''},
                        { label: 'Client side proving', url: ''}
                      ]
                    }, {
                      category: 'COMMON QUESTIONS',
                      menus: [
                        { label: 'How is Starknet secured?', url: ''},
                        { label: 'Does Starknet support EVM?', url: ''},
                        { label: 'What is Cairo?', url: ''},
                        { label: 'What is Starkex?', url: ''},
                        { label: 'What will decentralization on Starknet look like?', url: ''}

                      ]
                    }
                  ]}
                  footerMenus={[
                    { label: 'Starknet foundation', url: '', icon: <CheckIcon />},
                    { label: 'Glossary', url: '', icon: <CheckIcon />},
                    { label: 'FAQs', url: '', icon: <CheckIcon />},
                    { label: 'Media kit', url: '', icon: <CheckIcon />},
                  ]}
                />
              )
            },
            {
              label: 'Developer',
              dropdown: (
                <NavigationMenuDropdown
                  icon={<CheckIcon />}
                  title='DEVELOPERS HUB'
                  description='Start here for an overview of all things Starknet'
                  mainMenus={[
                    {
                      category: 'REFERENCE',
                      menus: [
                        { label: 'Documentation', url: ''},
                        { label: 'Release notes', url: ''}
                      ]
                    }, {
                      category: 'RESOURCES & TOOLS',
                      menus: [
                        { label: 'Tutorials', url: ''},
                        { label: 'Workshops', url: ''},
                        { label: 'Articles', url: ''},
                        { label: 'Libraries & plug-ins', url: ''},
                        { label: 'Templates', url: ''},
                        { label: 'Starknet playground', url: ''}
                      ]
                    }, {
                      category: 'NETWORK',
                      menus: [
                        { label: 'System monitoring', url: ''},
                        { label: 'Bug bounty program', url: ''},
                        { label: 'Audit service providers', url: ''},
                        { label: 'RPC providers', url: ''}
                      ]
                    }
                  ]}
                />
              )
            },
            {
              label: 'EcoSystem',
              dropdown: (
                <NavigationMenuDropdown
                  icon={<CheckIcon />}
                  title='ECOSYSTEM OVERVIEW'
                  description='Start here for an overview of all things Starknet'
                  mainMenus={[
                    {
                      category: 'Tools*',
                      menus: [
                        { label: 'Dapps', url: ''},
                        { label: 'Wallets', url: ''},
                        { label: 'Bridges', url: ''},
                        { label: 'Fiat onramps', url: ''},
                        { label: 'Block Explorers', url: ''}
                      ]
                    }
                  ]}
                />
              )
            },
            {
              label: 'Community',
              dropdown: (
                <NavigationMenuDropdown
                  icon={<CheckIcon />}
                  title='COMMUNITY HUB'
                  description='Start here for an overview of all things Starknet'
                  mainMenus={[
                    {
                      category: 'GET INVOLVED',
                      menus: [
                        { label: 'Online communities', url: ''},
                        { label: 'Events', url: ''},
                        { label: 'Jobs', url: ''}
                      ]
                    }, {
                      category: 'MEDIA',
                      menus: [
                        { label: 'Blog posts', url: ''},
                        { label: 'Podcasts', url: ''},
                        { label: 'Recorded talks', url: ''},
                        { label: 'Community calls', url: ''}
                      ]
                    }, {
                      category: 'GOVERNANCE',
                      menus: [
                        { label: 'Grants', url: ''},
                        { label: 'Proposals', url: ''},
                        { label: 'Claim rewards', url: ''}
                      ]
                    }, {
                      category: 'UPDATES',
                      menus: [
                        { label: 'Starknet EDU newsletter', url: ''},
                        { label: 'Starknet roundup newsletter', url: ''}
                      ]
                    }
                  ]}
                />
              )
            }
          ]
        }
      />
    </div>
  </div>
);
Primary.storyName = "Default";
