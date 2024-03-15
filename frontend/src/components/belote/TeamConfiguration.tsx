import { Flex, Box, Text, Input } from '@chakra-ui/react';

export default function TeamConfiguration() {
    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center' flex={1} margin={100}> 
            <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', display: 'flex' }}>
                <Flex alignItems='center'>
                    <Text marginRight="10px" flexShrink={0}>Nom de l'équipe</Text>
                    <Input type="number" placeholder="Nom de l'équipe" />
                </Flex>
            </Box>
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
