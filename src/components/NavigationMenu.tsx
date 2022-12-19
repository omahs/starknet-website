import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import cx from "classnames";
import React from 'react';

interface NaviMenu {
  label: string;
  dropdown?: React.ReactNode;
}

type Props = {
  naviMenus: NaviMenu[];
}

export const NavigationMenu = (
  {
    naviMenus = [],
  }: Props) => {

  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List className="flex flex-row rounded-lg bg-white p-2 space-x-2">
        {naviMenus.map(navi => (
          <NavigationMenuPrimitive.Item key={navi.label}>
            <NavigationMenuPrimitive.Trigger
              className={cx(
                "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
                "text-sm font-medium",
                "text-gray-700 ",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              {navi.label}
            </NavigationMenuPrimitive.Trigger>
            {navi.dropdown || null}
          </NavigationMenuPrimitive.Item>
        ))}

        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={cx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
              "text-sm font-medium text-gray-700 dark:text-gray-100"
            )}
          >
            Ecosystem
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={cx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
              "text-sm font-medium text-gray-700 dark:text-gray-100"
            )}
          >
            Community
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Indicator
          className={cx(
            "z-10",
            "top-[100%] flex items-end justify-center h-2 overflow-hidden",
            "radix-state-visible:animate-fade-in",
            "radix-state-hidden:animate-fade-out",
            "transition-[width_transform] duration-[250ms] ease-[ease]"
          )}
        >
          <div className="top-1 relative bg-white  w-2 h-2 rotate-45" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <div
        className={cx(
          "absolute flex justify-center",
          "w-[140%] left-[-20%] top-[100%]"
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={cx(
            "relative mt-2 shadow-lg rounded-md bg-white  overflow-hidden",
            "w-radix-navigation-menu-viewport",
            "h-radix-navigation-menu-viewport",
            "radix-state-open:animate-scale-in-content",
            "radix-state-closed:animate-scale-out-content",
            "origin-[top_center] transition-[width_height] duration-300 ease-[ease]"
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};
