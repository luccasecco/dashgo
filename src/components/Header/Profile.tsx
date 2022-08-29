import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
          align="center"
        >
          <Box mr="4" textAlign="right">
            <Text>Lucca Secco</Text>
            <Text color="gray.300" fontSize="small">
              luccasecco@hotmail.com
            </Text>
          </Box>

          <Avatar 
            size="md"
            name="Lucca Secco"
            src="https://github.com/luccasecco.png"
          />
        </Flex>
  )
}