import { Flex, Box, Text, Button} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function Alternance() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex flex={1} justifyContent='center' alignItems='center' padding={5}>
                <Box style={{ backgroundColor: '#a3a3a3', padding: '20px', borderRadius: '8px' }}>
                    <Text>Telemedicine technologies</Text>
                </Box>
            </Flex>
            <Flex padding={5}>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Présentation Entreprise</Text>
                    <Text>Telemedicine Technologies est une entreprise éditrice de solutions de e-santé grâce à son logiciel CleanWeb, qui est un outil permettant la gestion électronique des essais cliniques.</Text>
                    <Text>Telemedicine Technologies est impliqué dans plus de 64 pays, avec plus de 20 000 centres de recherche, 3 millions de patients et 50 000 utilisateurs à travers le monde.</Text>
                    <Text>Pour ma part, je suis rattaché à la branche Data, qui se trouve en Belgique. Mon objectif est de simplifier les démarches des Data Managers, de corriger les bugs et de mettre en place les études.</Text>          
                </Box>
            </Flex>
            <Flex flexDirection="column" alignItems="center" padding={5}>
                <Text as="h2" fontSize="lg" fontWeight="bold" marginBottom="20px">Missions</Text>  
                <Flex justifyContent="space-between" width="100%">
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Création des tableaux de bord automatique</Text>
                        <Text>Ma première mission au sein de l'entreprise a été de créer une application permettant la génération automatique de tableaux de bord à partir d'un programme Python. Ce processus s'intègre lors de la mise en place d'une étude et permet de gagner du temps lors de cette phase.</Text>
                        <Text>J'ai réalisé ce projet en partant de zéro. L'application crée des tableaux en fonction des besoins spécifiques de chaque étude. Certains graphiques ne sont pas générés pour certaines études, en fonction de leurs exigences particulières.</Text>
                    </Box>    
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Mise en place de la V2</Text>
                        <Text>Lors de mon alternance chez Telemedicine Technologies, j'ai participé à la mise en place de la nouvelle version du logiciel. Cette nouvelle version permet de récupérer, transformer et insérer les données dans la base de données de l'étude, afin de pouvoir les traiter et les afficher sur le tableau de bord avec des graphiques.</Text>
                        <Text>Ce nouveau processus a permis d'introduire des études plus complexes et d'inclure des informations qui n'étaient pas disponibles sur la version précédente (V1).</Text>
                    </Box>  
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Mise en place d'un back-end</Text>
                        <Text>J'ai entamé un projet à partir de zéro concernant le back-end du Data-Service. Ce projet vise à simplifier les démarches effectuées par l'équipe de Data&Service.</Text>
                        <Text>Ma première mission sur ce projet a été de réaliser la vérification du fichier de configuration d'une étude, afin de m'assurer qu'il n'y avait aucun problème dans ce fichier. Cela incluait la vérification de la présence obligatoire d'informations, ainsi que l'existence de certaines informations dans une feuille de calcul qui devaient également être présentes dans d'autres feuilles.</Text>
                    </Box>          
                </Flex>
                </Flex>
            <Flex flexDirection="column" alignItems="center" padding={5}>
                <Text as="h2" fontSize="lg" fontWeight="bold" marginBottom="20px">Technologies</Text>  
                <Flex justifyContent="space-between" width="100%">
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Python</Text>
                        <Text>Tous mes développements au sein de l'équipe Data Service s'effectuent en Python.</Text>
                        <Text>Les projets sont réalisés en Python car c'est un langage qui permet un traitement de données facile et efficace.</Text>
                        <Text>Grâce aux différents projets réalisés avec l'entreprise, j'ai pu enrichir mes compétences en Python, notamment dans le traitement de données, domaine que je ne connaissais pas avant mon alternance.</Text>
                    </Box>    
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">SQL</Text>
                        <Text>La branche Data&Service utilise des bases de données pour obtenir les informations des études. Les bases de données présentent une structure identique d'une étude à l'autre.</Text>
                        <Text>Pour réaliser les graphiques sur le projet, il est nécessaire d'effectuer des requêtes SQL sur la base de données de l'étude afin de récupérer les données à afficher.</Text>
                    </Box>
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">GitLab</Text>
                        <Text>L'entreprise utilise GitLab comme outil de gestion de code, permettant de centraliser le code de toute l'entreprise. GitLab permet de mettre en place des procédures de vérification sur les projets avec le GitLab CI (Continuous Integration) et de faire passer certains processus en fonction de la branche sur laquelle on se situe.</Text>
                        <Text>Avant mon arrivée en entreprise, j'utilisais Git pour mes projets personnels, mais je n'avais pas utilisé GitLab. GitLab me permet de réaliser des tests unitaires sur mes projets à chaque ajout de nouveau code.</Text>
                    </Box>            
                </Flex>
            </Flex>
            <Footbar />
        </Box>
    );
}
