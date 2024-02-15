import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Flex, Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Tennis() {
    const navigate = useNavigate();
    return (
        <Box style={{ backgroundColor: '#00ff00', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
                    <p>Bienvenue sur la page du tennis</p>
                    <p>Sur cette page, vous trouverez des outils permetant d'aider la gestion du club</p>
                    <Button colorScheme='green' onClick={() => navigate('/tennis/afterwork')}>Afterwok</Button>
                </div>
            </Flex>
            <Footbar />
        </Box>
    );
}