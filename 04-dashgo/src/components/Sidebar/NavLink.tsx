import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import Link from "next/link";

type NavLinkProps = {
  icon: IconType;
  children: string;
  href: string;
} & LinkProps;

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
