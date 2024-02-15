import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Flex, Box, Text } from '@chakra-ui/react';

export default function About() {
    return (
        <Box style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Présentation</Text>
                    <Text>Je m'appelle Cyprien Gaudin et je suis actuellement étudient en 3 ème année de BUT informatique</Text>
                    <Text>Je suis passionné par l'informatique depuis que je suis en 3 eme, j'ai effectué différent projets</Text>
                    <Text>pendant mon lycée en python et différent projets pendant mon BUT Informatique en JAVA</Text>
                    <Text>Je suis actuellement en alternance chez Telemedicine technologies en tant que developpeur Python</Text>
                </Box>
            </Flex>
            <Flex>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Compétences</Text>
                    <Text>Python</Text>
                    <Text>Java</Text>
                    <Text>HTML/CSS/JS</Text>
                    <Text>React</Text>
                    <Text>SQL</Text>
                    <Text>Git</Text>
                    <Text>Linux</Text>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}