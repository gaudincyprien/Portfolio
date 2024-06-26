import { Flex, Button, ButtonGroup } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <Flex bg='#dddddd' p={4} justifyContent='center'>
            <ButtonGroup>
                <Button colorScheme={currentPage === '/' ? 'red' : 'green'} onClick={() => navigate('/')}>Home</Button>
                <Button colorScheme={currentPage === '/me' ? 'red' : 'green'} onClick={() => navigate('/me')}>Portfolio</Button>
                <Button colorScheme={currentPage === '/belote' ? 'red' : 'green'} onClick={() => navigate('/belote')}>Belote</Button>
            </ButtonGroup>
        </Flex>
    );
}
