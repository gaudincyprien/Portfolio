import { Flex, Box, Text, Button} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function BUT2emeannee() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me/IUT">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>2 eme année</Text>
                </Box>
            </Flex>
            <Button style={{ marginBottom: '10px'}}>Partir des exigences et aller jusqu’à une application complète</Button>
            <Flex justifyContent='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Appliquer des principes d’accessibilité et d’ergonomie</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Adopter de bonnes pratiques de conception et de programmation</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Vérifier et valider la qualité de l’application par les tests</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Sélectionner les algorithmes adéquats pour répondre à un problème donné</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Choisir des structures de données complexes adaptées au problème</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Utiliser des techniques algorithmiques adaptées pour des problèmes complexes</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Comprendre les enjeux et moyens de sécurisation des données et du code</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Évaluer l’impact environnemental et sociétal des solutions proposées</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Déployer des services dans une architecture réseau</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Concevoir et développer des applications communicantes</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Utiliser des serveurs et des services réseaux virtualisés</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Sécuriser les services et données d’un système</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Optimiser une base de données,interagir avec une application et mettre en œuvre la sécurité</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Optimiser les modèles de données de l’entreprise</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Assurer la sécurité des données (intégrité et confidentialité)</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Organiser la restitution de données à travers la programmation et la visualisation</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Manipuler des données hétérogènes</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Appliquer une démarche de suivi de projet en fonction des besoinsmétiers des clients et desutilisateurs</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Formaliser les besoins du client et de l'utilisateur</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Identifier les critères de faisabilité d’un projet informatique</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Définir et mettre en œuvre une démarche de suivi de projet</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Situer son rôle et ses missions au sein d’une équipe informatique</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI,...)</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Rendre compte de son activité professionnelle</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
