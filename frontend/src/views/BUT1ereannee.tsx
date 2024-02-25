import { Flex, Box, Text, Button} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function BUT1ereannee() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me/IUT">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>1 ere année</Text>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
