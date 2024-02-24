import { Flex, Box, Text, Image} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';

export default function Alternance() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Bienvenue sur la page de présentation de mon alternance</Text>
                </Box>
            </Flex>
            <Flex>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Présentation Entreprise</Text>
                    <Text>.....</Text>
                    <Text>.....</Text>
                    <Text>.....</Text>
                    <Text>.....</Text>
                    <Text>.....</Text>                 
                </Box>
                <Image src="logo.jpg" alt="Logo de l'entreprise" />
            </Flex>
            <Flex flexDirection="column" alignItems="center">
                <Text as="h2" fontSize="lg" fontWeight="bold" marginBottom="20px">Missions</Text>  
                <Flex justifyContent="space-between" width="50%">
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Développement</Text>
                        <Text>Details de la mission de développement...</Text>
                        <Text>Autres détails...</Text>
                    </Box>    
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Gestion de projet</Text>
                        <Text>Details de la mission de gestion de projet...</Text>
                        <Text>Autres détails...</Text>
                    </Box>            
                </Flex>
            </Flex>

            <Footbar />
        </Box>
    );
}
