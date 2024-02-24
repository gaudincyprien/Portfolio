import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Flex, Box, Text, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Box style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Présentation</Text>
                    <Text>Je m'appelle Cyprien Gaudin et je suis actuellement étudient en 3 ème année de BUT informatique</Text>
                    <Text>J'effectue ma troisième année de BUT en alternance chez Telemedicine technologies en tant que developpeur Python</Text>
                    <Text>Je suis passionné par l'informatique depuis que je suis en 3 eme, j'ai effectué différent projets</Text>
                    <Text>pendant mon lycée en python et différent projets pendant mon BUT Informatique en JAVA</Text>
                    <Text>L'année prochaine je rejoins un master en developement full-stack en alternance</Text>                    
                </Box>
            </Flex>
            <Flex>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Langages</Text>
                    <List spacing={1}>
                        <ListItem>- Python</ListItem>
                        <ListItem>- Java</ListItem>
                        <ListItem>- HTML/CSS/JS</ListItem>
                        <ListItem>- React</ListItem>
                        <ListItem>- SQL (MySQL/MariaDB)</ListItem>
                        <ListItem>- Git</ListItem>
                        <ListItem>- Linux</ListItem>
                        <ListItem>- PHP</ListItem>
                        <ListItem>- C</ListItem>
                    </List>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Formation</Text>
                    <List spacing={3}>
                        <ListItem>
                            <Text as="h3" fontSize="md" fontWeight="bold">BUT Informatique</Text>
                            <List spacing={1}>
                                <ListItem>- Rélaiser d'application</ListItem>
                                <ListItem>- Gestion de projet</ListItem>
                                <ListItem>- Base de données</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>
                            <Text as="h3" fontSize="md" fontWeight="bold">Bac Général</Text>
                            <List spacing={1}>
                                <ListItem>- Mathématiques</ListItem>
                                <ListItem>- Physique</ListItem>
                                <ListItem>- NSI</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }} >
                    <Text as="h2" fontSize="lg" fontWeight="bold">Personnalité</Text>
                    <List spacing={1}>
                        <ListItem>- Autonomme</ListItem>
                        <ListItem>- Persévérent</ListItem>
                        <ListItem>- Organisation</ListItem>
                        <ListItem>- Travail d'équipe</ListItem>
                        <ListItem>- Adaptation</ListItem>
                        <ListItem>- Rigueur</ListItem>
                        <ListItem>- Initiative</ListItem>
                        <ListItem>- Curiosité</ListItem>
                        <ListItem>- Communication</ListItem>
                    </List>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Expérience Professionels</Text>
                    <List spacing={3}>
                        <ListItem>
                        <Link to="/me/alternance">
                          <Text as="h3" fontSize="md" fontWeight="bold" color="blue.500">Telemedicine Technologies (Avril2023)</Text>
                        </Link>
                            <List spacing={1}>
                                <ListItem>- Création de tableaux de bord</ListItem>
                                <ListItem>- Base de données</ListItem>
                                <ListItem>- Correction de bugs</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}