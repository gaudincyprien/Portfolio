import { Flex, Box, Text, Button} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function Alternance() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
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
                    <Text>Telemedicine technologies est une entreprise éditeuse de solution de e-santé grâce à leur logiciel</Text>
                    <Text>CleanWeb qui est un outils qui permet la gestion électronique des essais cliniques</Text>
                    <Text>Telemedinice Technologies est implisqué dans plus de 64 pays, plus de 20 000 centres de recherches</Text>
                    <Text>3 millions de patients et 50 000 utilisateurs à travers le monde</Text>
                    <Text>Pour la part je suis ratché à la branche Data qui se trouve en belgique</Text>  
                    <Text>Mon objectif est de simplifier les démarches des Data Managers, corriger les bugs et mettre en place les études</Text>               
                </Box>
            </Flex>
            <Flex flexDirection="column" alignItems="center" padding={5}>
                <Text as="h2" fontSize="lg" fontWeight="bold" marginBottom="20px">Missions</Text>  
                <Flex justifyContent="space-between" width="100%">
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Création des tableaux de bord automatique</Text>
                        <Text>Ma première mission au sein de l'entreprise a été de créer une application permettant la génréation</Text>
                        <Text>de tableau de bord automatique depuis un programme python</Text>
                        <Text>Ce processus s'intègre lors de la mise en place d'une étude et permet de gagner du temps lors de la</Text>
                        <Text>mise en place d'une étude</Text>
                        <Text>J'ai réaliser ce projet en partant de zéro, ce projet créer des tableaux en fonction des besoins de l'étude</Text>
                        <Text>et des besoins nécéssaires de ces études. Certains graphes ne sont pas créer pour certaines études</Text>
                    </Box>    
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Mise en place de la V2</Text>
                        <Text>Lors de mon alternance chez Telemedicine Technologies, j'ai participé à la mise en place de la nouvelle version permettant</Text>
                        <Text>de récupérer, transformer et insérer les données dans la base de données de l'étude afin de pouvoir traiter les données</Text>
                        <Text>et les afficher sur le tableau de bord avec des graphiques</Text>
                        <Text>Ce nouveau processus permet d'avoir des études plus complexes et avec des informations qui n'étais pas présentes sur le V1</Text>
                    </Box>  
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Mise en place d'un back-end</Text>
                        <Text>J'ai commencé un projet à réro qui concenrne le back-end de Data-Service</Text>
                        <Text>Ce projet à pour but de simplifier les démarches faite par l'équipe de Data&Service</Text>
                        <Text>Ma première mission sur ce projet à été de faire la vérification du fichier de oncfiguration d'une étude</Text>
                        <Text>et de vérifier qu'il y ait pas de problème dans ce fichier comme des informations qui doivent être présente</Text>
                        <Text>obligatoirement ou alors des informations qui existe dans une feuille doivent exister dans tels autre feuilles</Text>
                    </Box>          
                </Flex>
                </Flex>
            <Flex flexDirection="column" alignItems="center" padding={5}>
                <Text as="h2" fontSize="lg" fontWeight="bold" marginBottom="20px">Technologies</Text>  
                <Flex justifyContent="space-between" width="100%">
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">Python</Text>
                        <Text>Lors de tout mes dévellopement au sein de l'équipe Data Service s'effectue en Python</Text>
                        <Text>Les projets sont en python car c'est un langage qui permet un traitement de données facile</Text>
                        <Text>Avec les différents projets réalisés avec l'entreprise j'ai pu enrichir mes compténces en python notament avec le traitementf de données à effectuer que je ne connaissait pas avant mon alternance</Text>
                    </Box>    
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">SQL</Text>
                        <Text>La branche Data&service utilisé des base de données pour avoir les informations des études. Les base de données sont identiques d'une étude à l'autre sur la structure</Text>
                        <Text>Afin de réaliser les graphiques sur le projet il faut faire des requetes SQL sur la base de données de l'étude afin de récupérer les données à affichier</Text>
                    </Box>
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 5px' }}>
                        <Text as="h3" fontSize="md" fontWeight="bold">GitLab</Text>
                        <Text>L'entreprise utilisé GitLab comme outil de gestion de code qui permet de centraliser le code de toute l'entreprise. Gitlab permet de mettre en place des procédures de vérification sur les projets avec le gitlab.cy et de faire passer certains processus en fonction de la branche sur laquelle on se situe</Text>
                        <Text>Avant mon arrivée en entreprise j'utilisé Git pour mes projets perso mais je n'avais utilisé GitLab avant mon arrivée en entreprise. GitLab me permet de de faire des test unitaires sur mon projet à chacque ajout de nouveau code sur mes projets</Text>
                    </Box>            
                </Flex>
            </Flex>
            <Footbar />
        </Box>
    );
}
