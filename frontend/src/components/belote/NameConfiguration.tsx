import { Flex, Box, Text, Input } from '@chakra-ui/react';

export default function NameConfiguration() {
    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center' flex={1} margin={50}> 
            <Box style={{ marginTop:50,  backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Flex alignItems='center'>
                    <Text marginRight="10px" flexShrink={0}>Nom du joueur</Text>
                    <Input type="number" placeholder="nom du joueur" />
                </Flex>
                <Flex alignItems='center'>
                    <Text marginRight="10px" flexShrink={0}>Nom du joueur</Text>
                    <Input type="number" placeholder="nom du joueur" />
                </Flex>
            </Box>
        </Flex>
    );
}
