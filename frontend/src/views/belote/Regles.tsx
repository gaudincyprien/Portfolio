import { Flex, Box, Text} from '@chakra-ui/react';
import Navbar from '../../components/partial/NavBar';
import Footbar from '../../components/partial/FootPage';
import BoxTitle from '../../components/belote/BoxTitle';

export default function HomePage() {

    return (
        <Box style={{ backgroundColor: '#00ff00', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <BoxTitle />
            <Footbar />
        </Box>
    );
}
