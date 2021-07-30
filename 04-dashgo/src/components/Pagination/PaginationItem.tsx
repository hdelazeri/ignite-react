import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  isCurrent?: boolean;
  number: number;
};

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ background: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{ background: "gray.500" }}
    >
      {number}
    </Button>
  );
}
