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
      <Flex id="layout" color="fg" bg="bg.subtle" w="100%" h="100vh" overflow="hidden" flexDirection="column">
        <Flex id="menu" justify="flex-end" >
          <ColorModeButton />
        </Flex>
        <Flex id="content" flexDirection={{ base: "column", md: "row" }} overflow="hidden">
          <Flex id='sidebar' min="250px" w={{ base: "100%", md: "350px" }} >
            <VStack w="100%" alignItems="center">
              <Center>
                <Heading w="100%">Toolbox</Heading>
              </Center>
              <VStack gap="0" className="menu-list" w="100%">
                <Box w="100%" className={`menu-item ${location.pathname === '/uuid' || location.pathname === '/' ? 'menu-selected' : ''}`}>
                  <Link to="/uuid" className="menu-link"><Center>UUID Generator</Center></Link>
                </Box>
                <Box w="100%" className={`menu-item ${location.pathname === '/string' ? 'menu-selected' : ''}`}>
                  <Link to="/string" className="menu-link"><Center>String Utilities</Center></Link>
                </Box>
                <Box w="100%" className={`menu-item ${location.pathname === '/time' ? 'menu-selected' : ''}`}>
                  <Link to="/time" className="menu-link"><Center>Time Utilities</Center></Link>
                </Box>
                <Box w="100%" className={`menu-item ${location.pathname === '/json' ? 'menu-selected' : ''}`}>
                  <Link to="/json" className="menu-link"><Center>JSON Editor</Center></Link>
                </Box>
              </VStack>

            </VStack>
          </Flex>

          <main id="main">
            <Outlet />
          </main>
        </Flex>
      </Flex>
    </>
  )
}

export default App
