"use client"

import * as React from "react"
import Link from "next/link"
import { IoHeartOutline, IoHeart, IoSearchOutline, IoCartOutline } from "react-icons/io5"
import { useWishlist } from "../../context/WishlistContext"
import { useCart } from "../../context/CartContext"
import { getAllCategories } from "@/api/services/route.services"
import { CategoryType } from "@/api/types"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navbar() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  React.useEffect(() => {
    async function fetchCategories() {
      const data = await getAllCategories();
      if (data) setCategories(data); // Show all categories in dropdown
    }
    fetchCategories();
  }, []);

  return (
    <NavigationMenu className="sticky top-0 z-50 w-full max-w-none justify-between border-b bg-white px-6 py-3 md:px-20">
      <div className="navbar-brand-search">
        <Link href="/" className="navbar-logo">
          <IoCartOutline className="navbar-logo-icon" />
          <span>freshcart</span>
        </Link>
        <div className="navbar-search">
          <IoSearchOutline className="navbar-search-icon" />
          <input
            type="search"
            placeholder="Search for products, brands and more"
            className="navbar-search-input "
          />
        </div>
      </div>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Shop (was Products) */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/shop">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Categories Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem href="/Categories" title="All Categories">
                Browse our complete collection of products.
              </ListItem>
              {categories.map((category) => (
                <ListItem
                  key={category._id}
                  href={`/Categories?id=${category._id}`}
                  title={category.name}
                >
                  Explore products in {category.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Brands */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/brands">Brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Mobile Menu */}
        <NavigationMenuItem className="flex md:hidden">
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-48 p-2">
              <li>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/shop">Shop</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/Categories">Categories</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/brands">Brands</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/login">Sign in</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Icons & Sign In */}
        <NavigationMenuItem>
          <div className="navbar-icons">
            <Link href="/wishlist" className="navbar-icon-btn relative">
              {wishlist.length > 0 ? (
                <>
                  <IoHeart
                    className="navbar-cart-icon"
                    style={{ color: "#dc2626" }}
                  />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {wishlist.length}
                  </span>
                </>
              ) : (
                <IoHeartOutline
                  className="navbar-cart-icon"
                  style={{ color: "#0aad0a" }}
                />
              )}
            </Link>
            <Link href="/cart" aria-label="Cart" className="navbar-icon-btn relative">
              <IoCartOutline className="navbar-cart-icon" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex gap-4 items-center">
          <Link href="/login" className="navbar-signin">
            Sign in
          </Link>
         
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
