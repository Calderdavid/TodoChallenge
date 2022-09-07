import { Grid, 
    GridItem, 
    TabList, Tabs, Text, 
    Tab, Box, Checkbox, 
    TabPanels, TabPanel, Input, FormControl,
    Button, CheckboxGroup, Stack, useCheckbox
} from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { useState } from 'react'
import { FormTodo } from './components/FormTodo'
import { TaskList } from './components/TaskList'
import { NavBar } from './components/NavBar'




export const TodoPage = () => {

    const [list, setList] = useState([]);

    const handleAddItem = (addItem) => {
        setList([...list, addItem])
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

                <NavBar list={list} setList={setList} handleAddItem={handleAddItem}/>

                {/* <FormTodo handleAddItem={handleAddItem}/> */}
                
                {/* <TaskList list={list} setList={setList}/> */}
                
            </Grid>
        
        </>
        // <>
        //     <Grid
        //         templateRows='repeat(2)'
        //         gap={2}
        //         mt={10}
        //         justifyContent="center"
        //     >
        //         <GridItem>
        //             <Text fontSize={80} fontFamily='sans-serif'>#todo</Text>
        //         </GridItem>
        //         <GridItem>                
        //             <Tabs>
        //                 <TabList>
        //                     <Tab>All</Tab>
        //                     <Tab>Active</Tab>
        //                     <Tab>Completed</Tab>
        //                 </TabList>

        //                 <FormControl display="flex" alignItems="center" mt={2}>
        //                     <Input 
        //                         placeholder="Enter a new task"
        //                         // onChange={handleInputChange}
        //                         // value={newTask}
        //                     />
        //                     <Button
        //                         colorScheme='teal'
        //                         type='submit'
        //                         ml={2}
        //                     >
        //                         Add
        //                     </Button>
        //                 </FormControl>
        //                 {
        //                     tasks.map((task, index) => (
        //                         <TabPanels key={task}>                        
        //                             <TabPanel>
        //                                 <CheckboxGroup colorScheme='green'>
        //                                     <Stack spacing={[1, 5]}>
        //                                         <Checkbox 
        //                                             // onChange={handleOnChange}
        //                                             // value={isChecked}
        //                                         >
        //                                             {task}
        //                                         </Checkbox>
        //                                     </Stack>
        //                                 </CheckboxGroup>
        //                             </TabPanel>
        //                         </TabPanels>
        //                     ))
        //                 } 
        //             </Tabs>
        //         </GridItem> 

        //     </Grid>
        
        
        
        // </>
        
    )
}
