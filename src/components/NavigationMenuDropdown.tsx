import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import cx from "classnames";
import React, { ReactNode } from 'react';

interface Menu {
  label: string;
  url: string;
  icon?: ReactNode;
}

interface MenuCategory {
  category: string;
  menus: Menu[];
}

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
  mainMenus: MenuCategory[];
  footerMenus?: Menu[];
};

export const NavigationMenuDropdown = (
  {
    title,
    description,
    icon,
    mainMenus,
    footerMenus,
  }: Props) => {
  return (
    <NavigationMenuPrimitive.Content
      className={cx(
        "absolute w-auto top-0 left-0 rounded-lg",
        "radix-motion-from-start:animate-enter-from-left",
        "radix-motion-from-end:animate-enter-from-right",
        "radix-motion-to-start:animate-exit-to-left",
        "radix-motion-to-end:animate-exit-to-right"
      )}
    >
      <div className="w-[30rem] lg:w-[42rem] p-3">
        <div className="flex">
          <i className="mr-2">{icon}</i>
          <div>
            <h3 className="text-bodyText text-sm font-medium uppercase mb-3">{title}</h3>
            <p className="mb-5 text-sm">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 pt-5">
          {mainMenus.map((m, key) => (
              <div key={key}>
                <p className="mb-5 text-sm font-medium uppercase">{m.category}</p>
                <ul>
                  {m.menus.map((menu, key) => (
                    <li key={key} className="py-2 mb-2 text-sm"><a href={menu.url}>{menu.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div  className="grid grid-rows-2 grid-flow-col gap-4">
          {footerMenus && footerMenus.map((f, key) => (
              <div key={key} className="flex items-center">
                <div className="mr-2">{f.icon}</div>
                <a href={f.url} className="py-2 mb-2 text-sm">{f.label}</a>
              </div>
            ))}
        </div>

      </div>
    </NavigationMenuPrimitive.Content>
  );
};
