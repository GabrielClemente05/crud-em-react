import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState([]);

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
    >
      <Box maxW={800} w="100vh" py={10} px={2}>
        <Button colorScheme="blue" onClick ={() => [setDataEdit({}), onOpen()]}>
           Novo Cadastro
        </Button>

        <Box overFlow="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxW={isMobile ? 5 : 100} fonstsize="20px">
                  Nome
                </Th>
                <Th maxW={isMobile ? 5 : 100} fonstsize="20px">
                  E-mail
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
          </Table>
        </Box>
      </Box>
    </Flex>
  )
}

export default App
