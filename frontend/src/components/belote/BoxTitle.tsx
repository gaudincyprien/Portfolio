import { Flex, Box, Text } from '@chakra-ui/react';

export default function BoxTitle() {
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
        <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
            <Text>Points Belote</Text>
        </Box>
    </Flex>
    );
}
