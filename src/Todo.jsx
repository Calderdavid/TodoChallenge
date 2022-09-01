import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { AppRouter } from './router/AppRouter'
import theme from './theme/theme'

export const Todo = () => {
  return (
    <ChakraProvider theme={theme}>
        <AppRouter />
    </ChakraProvider>
  )
}
