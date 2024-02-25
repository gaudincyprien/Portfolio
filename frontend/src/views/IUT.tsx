import { Flex, Box, Text, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';

export default function IUT() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#a3a3a3', padding: '20px', borderRadius: '8px' }}>
                    <Text>BUT Informatique (IUT Laval)</Text>
                </Box>
            </Flex>
            <Flex padding={5}>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Présentation de la Formation</Text>
                    <Text>Durant cette formation de 3 ans (2 ans en initial et 1 an en alternance), j'ai pu acquérir des notions dans le dévellopement mais aussi dans la gestion de projet ou encore des notions communication et de droit.</Text>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Langages vus durant les cours </Text>
                    <Text>Durant les différents cours et projets, voici les différents langages sur lesquels j'ai travaillé : Java, HTML/CSS/JS, Python, React, SQL, GIT, Linux, PHP, C</Text>
                </Box>
            </Flex>
            <Flex padding={5} justifyContent="center" alignItems="center">
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Link to="/me/IUT/premiereannee">
                        <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500">1ère année</Text>
                    </Link>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Link to="/me/IUT/deuxiemeannee">
                        <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500">2ème année</Text>
                    </Link>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Link to="/me/IUT/troisiemeannee">
                        <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500">3ème année</Text>
                    </Link>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Link to="/me/IUT/culturegenerale">
                        <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500">Culture Générale</Text>
                    </Link>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
