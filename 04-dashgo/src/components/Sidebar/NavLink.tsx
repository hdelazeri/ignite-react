import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { IconType } from "react-icons/lib";

type NavLinkProps = {
  icon: IconType;
  children: string;
} & LinkProps;

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
