import { useState } from 'react'
import './App.css'
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router';
import { ColorModeButton } from "@/components/ui/color-mode"
import { Box, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Flex id="layout" color="fg" bg="bg.subtle" w="100%" h="100vh" flexDirection="column">
        <Flex id="menu" justify="flex-end" >
          <ColorModeButton />
        </Flex>
        <Flex id="content" h="100%" flexDirection={{ base: "column", md: "row" }}>
          <Flex id='sidebar' min="200px" w={{ base: "100%", md: "350px" }} m={{ base: "1em", md: "1em" }} >
            <VStack w="100%" alignItems="center">
              <Center>
                <Heading w="100%">Toolbox</Heading>
              </Center>
              <VStack gap="0" className="menu-list" w="100%">
                <Box w="100%" className={`${location.pathname === '/uuid' || location.pathname === '/' ? 'menu-selected' : ''}`}>
                  <Link to="/uuid" className="menu-link"><Center>UUID Generator</Center></Link>
                </Box>
                <Box w="100%" className={`${location.pathname === '/string' ? 'menu-selected' : ''}`}>
                  <Link to="/string" className="menu-link"><Center>String Utilities</Center></Link>
                </Box>
                <Box w="100%" className={`${location.pathname === '/time' ? 'menu-selected' : ''}`}>
                  <Link to="/time" className="menu-link"><Center>Time Utilities</Center></Link>
                </Box>
                <Box w="100%" className={`${location.pathname === '/json' ? 'menu-selected' : ''}`}>
                  <Link to="/json" className="menu-link"><Center>JSON Editor</Center></Link>
                </Box>
              </VStack>

            </VStack>
          </Flex>

          <Box id="main" flex="1" m="3" >
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default App
