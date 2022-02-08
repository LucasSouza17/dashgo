import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Souza</Text>
          <Text color="gray.300" fontSize="sm">
            lucasnando800@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diego Fernandes"
        src="http://www.github.com/lucassouza17.png"
      />
    </Flex>
  );
}
