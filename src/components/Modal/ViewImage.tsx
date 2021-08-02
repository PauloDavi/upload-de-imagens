import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps) {
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent bg="pGray.800" maxW={900} w="auto" h="auto">
        <ModalBody p={0} w="100%" h="100%">
          <Image
            src={imgUrl}
            borderTopRadius="md"
            objectFit="cover"
            w="100%"
            h="100%"
            maxW={900}
            maxH={600}
          />
        </ModalBody>

        <ModalFooter>
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
