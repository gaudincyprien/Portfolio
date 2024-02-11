import Navbar from '../components/partial/NavBar';
import { Flex } from '@chakra-ui/react';

export default function About() {
    return (
        <div style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <h1>Bienvenue sur mon portfolio</h1>
                </div>
            </Flex>
        </div>
    );
}