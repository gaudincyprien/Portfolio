import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Flex, Box, Text, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Box style={{ backgroundColor: '#d3d3d3', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Présentation</Text>
                    <Text>Je m'appelle Cyprien Gaudin et je suis actuellement étudiant en 3ème année de BUT informatique.</Text>
                    <Text>J'effectue ma troisième année de BUT en alternance chez Telemedicine Technologies en tant que développeur Python.</Text>
                    <Text>Je suis passionné par l'informatique depuis que je suis en 3ème. J'ai réalisé différents projets en Python pendant mon lycée, ainsi que différents projets en JAVA pendant mon BUT informatique.</Text>
                    <Text>L'année prochaine, je rejoindrai un master en développement full-stack en alternance.</Text>               
                </Box>
            </Flex>
            <Flex flex={1} justifyContent='center' >
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px', marginBottom: '20px' }}>
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
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px', marginBottom: '20px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Formation</Text>
                    <List spacing={3}>
                        <ListItem>
                            <Link to="/me/IUT">
                                <Text as="h3" fontSize="md" fontWeight="bold" color="blue.500">BUT Informatique</Text>
                            </Link>
                            <List spacing={1}>
                                <ListItem>- Réalisation d'application</ListItem>
                                <ListItem>- Gestion de projet</ListItem>
                                <ListItem>- Base de données</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>
                            <Text as="h3" fontSize="md" fontWeight="bold">Bac Général</Text>
                            <List spacing={1}>
                                <ListItem>- Mathématiques</ListItem>
                                <ListItem>- Physique</ListItem>
                                <ListItem>- NSI (Numérique et Sciences Informatiques)</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px', marginBottom: '20px' }} >
                    <Text as="h2" fontSize="lg" fontWeight="bold">Personnalité</Text>
                    <List spacing={1}>
                        <ListItem>- Autonomie</ListItem>
                        <ListItem>- Persévérance</ListItem>
                        <ListItem>- Organisation</ListItem>
                        <ListItem>- Travail d'équipe</ListItem>
                        <ListItem>- Adaptation</ListItem>
                        <ListItem>- Rigueur</ListItem>
                        <ListItem>- Initiative</ListItem>
                        <ListItem>- Curiosité</ListItem>
                        <ListItem>- Communication</ListItem>
                    </List>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px', marginBottom: '20px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Expérience professionnelle</Text>
                    <List spacing={3}>
                        <ListItem>
                        <Link to="/me/alternance">
                          <Text as="h3" fontSize="md" fontWeight="bold" color="blue.500">Telemedicine Technologies (Avril2023)</Text>
                        </Link>
                            <List spacing={1}>
                                <ListItem>- Création de tableaux de bord</ListItem>
                                <ListItem>- Gestion des bases de données</ListItem>
                                <ListItem>- Correction de bugs</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
            </Flex>
            <Flex flex={1} justifyContent='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px', marginBottom: '20px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Projet Personnel</Text>
                    <List spacing={3}>
                        <ListItem>
                            <Text as="h3" fontSize="md" fontWeight="bold">Développement d'un site web pour le SLTC (Stade Lavallois Tennis Club)</Text>
                            <List spacing={1}>
                                <ListItem>- Réalisation d'un cahier des charges</ListItem>
                                <ListItem>- Réalisation de maquettes avec Figma</ListItem>
                                <ListItem>- Développement du site web</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
            </Flex>
            <Footbar />
        </Box>

    );
}