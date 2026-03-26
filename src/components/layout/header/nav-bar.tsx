import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { CATEGORIES_QUERYResult } from "@/sanity/types";

export default function NavBar({
  categoryList,
}: {
  categoryList: CATEGORIES_QUERYResult;
}) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-6">
        {categoryList.map(({ name, slug, children }) =>
          children.length > 0 ? (
            <NavigationMenuItem key={slug}>
              <NavigationMenuTrigger className="text-primary font-extrabold">
                {name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="w-40 py-2">
                  {children.map(({ name, slug }) => (
                    <li key={slug}>
                      <NavigationMenuLink href={slug} className="text-primary">
                        {name}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={slug}>
              <NavigationMenuLink
                href={slug}
                className="text-primary font-extrabold"
              >
                {name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
