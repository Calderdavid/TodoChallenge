import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { TaskList } from './TaskList'
import { FormTodo } from './FormTodo'

export const NavBar = (props) => {

    const {
        list,
        setList,
        handleAddItem
    } = props
    
    const [listActive, setListActive] = useState(list);
    const [completedList, setCompletedList] = useState(list);
    
    const itemsActive = () => {
        const activeList = listActive.filter(item => item.done === false);

        console.log('passoo')
        
        setListActive(activeList);
    }
    const itemsCompleted = () => {
        const completedList = completedList.filter(item => item.done === true);

        console.log('passoo')
        
        setCompletedList(completedList);
    }

    return (
        <>
            <Tabs>
                <TabList mb={2}>
                    <Tab>All</Tab>
                    <Tab onClick={itemsActive}>Active</Tab>
                    <Tab>Completed</Tab>
                </TabList>
                
                <FormTodo handleAddItem={handleAddItem}/>

                <TabPanels>
                    <TabPanel>
                        <TaskList list={list} setList={setList} flag="all"/>
                    </TabPanel>
                    <TabPanel>
                       two 
                    </TabPanel>
                    <TabPanel>
                        three
                    </TabPanel>
                </TabPanels>
            </Tabs>

            

        </>
    )
}
