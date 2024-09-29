import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
}  from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({data, setData, dataEdit, isOpen, onClose}) => {
    const[name, setName] = useState(dataEdit.name || "");
    const[email, setEmail] = useState(dataEdit.email || "");
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Cadastro de Clientes</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl display="flex" flexDir="column" gap={4}>
                        <Box>
                            <FormLabel>
                                <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </FormLabel>
                        </Box>
                        <Box>
                            <FormLabel>E-mail</FormLabel>
                            <Input
                                type="email"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Box>
                    </FormControl>
                </ModalBody>

                <ModalFooter justifyContent="start">
                    <Button colorScheme="green" mr={3} onClick={handleSave}>
                        Salvar
                    </Button>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
  }
  
  export default ModalComp;
  