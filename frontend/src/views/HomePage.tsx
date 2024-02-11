import { Flex} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';

export default function HomePage() {

    return (
        <div style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <h1>Bienvenue sur mon site</h1>
                </div>
            </Flex>
        </div>
    );
}
