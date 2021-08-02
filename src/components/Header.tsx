import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Image,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const isSmallWindow = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px="10"
          py={6}
        >
          <Image src="logo.svg" h={10} />
          <Button onClick={() => onOpen()}>
            {isSmallWindow ? (
              <Icon as={RiAddLine} fontSize="24" />
            ) : (
              'Adicionar imagem'
            )}
          </Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
