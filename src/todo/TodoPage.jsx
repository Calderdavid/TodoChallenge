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


const tasks = [
    {
        desc: 'Do coding Challenge1',
        isActive: false
    },
    {
        desc: 'Do coding Challenge2',
        isActive: false
    },
    {
        desc: 'Do coding Challenge3',
        isActive: false
    },
    {
        desc: 'Do coding Challenge4',
        isActive: false
    },
    {
        desc: 'Do coding Challenge5',
        isActive: false
    },
    {
        desc: 'Do coding Challenge6',
        isActive: false
    },
]

export const TodoPage = () => {

    // const { state } = useCheckbox();
    const [isChecked, setIsChecked] = useState(false)
    

    const handleOnChange = () => {
        // console.log(isChecked)
        setIsChecked(!isChecked);
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
                <GridItem>                
                    <Tabs>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Active</Tab>
                            <Tab>Completed</Tab>
                        </TabList>

                    {/* <ShowAll tasks={tasks}/>          */}
                        <FormControl display="flex" alignItems="center" mt={2}>
                            <Input placeholder="Enter a new task"/>
                            <Button
                                colorScheme='teal'
                                type='submit'
                                ml={2}
                            >
                                Add
                            </Button>
                        </FormControl>
                        {
                            tasks.map((task, index) => (
                                <TabPanels key={task.desc}>                        
                                    <TabPanel>
                                        <CheckboxGroup colorScheme='green'>
                                            <Stack spacing={[1, 5]}>
                                                <Checkbox 
                                                    // onChange={handleOnChange}
                                                    // value={isChecked}
                                                >
                                                    {task.desc}
                                                </Checkbox>
                                            </Stack>
                                        </CheckboxGroup>
                                    </TabPanel>
                                </TabPanels>
                            ))
                        } 
                    </Tabs>
                </GridItem> 

            </Grid>
        
        
        
        </>
        
    )
}
