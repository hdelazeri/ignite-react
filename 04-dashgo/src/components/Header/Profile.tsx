import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Henrique Delazeri</Text>
          <Text color="gray.300" fontSize="small">
            contato@hdelazeri.dev
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Henrique Delazeri"
        src="https://github.com/hdelazeri.png"
      />
    </Flex>
  );
}
