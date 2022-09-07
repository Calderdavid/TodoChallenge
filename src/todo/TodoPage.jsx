import { Grid, GridItem, Text } from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { useState } from 'react'
import { NavBar } from './components/NavBar'




export const TodoPage = () => {

    const [ list, setList ] = useState([]);
    const [ activeList, setActiveList ] = useState([]);
    const [ completedList, setCompletedList ] = useState([]);

    const handleAddItem = ( addItem ) => {
        setList([ ...list, addItem ]);
        setActiveList([ ...list, addItem ]);
    }

    return (
        <>
            <Grid
                templateRows='repeat(2)'
                gap={2}
                mt={10}
                justifyContent="center"
            >
                <GridItem>
                    <Text fontSize={80} fontFamily='sans-serif'>#todo</Text>
                </GridItem>

                <NavBar 
                    list={list} 
                    setList={setList} 
                    handleAddItem={handleAddItem}
                    activeList={activeList}
                    setActiveList={setActiveList}
                    completedList={completedList}
                    setCompletedList={setCompletedList}
                />
            </Grid> 
        </>
    )
}
