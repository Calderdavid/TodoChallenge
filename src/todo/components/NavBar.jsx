import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { TaskList } from './TaskList'
import { FormTodo } from './FormTodo'

export const NavBar = ( props ) => {

    const {
        list,
        setList,
        handleAddItem,
        activeList, 
        setActiveList, 
        completedList,
        setCompletedList,
    } = props
    
    const [ tabIndex, setTabIndex ] = useState(0)
    
    const handleTabsChange = ( index ) => {
        setTabIndex( index );
    }

    const onClickRemoveItem = e => {
        const updateList = list.filter( item => item.done === false );

        setActiveList( updateList );
    };

    const onClickRemoveActive = e => {
        const updateList = list.filter( item => item.done === true );

        setCompletedList( updateList );
    }
    
    return (
        <>
            <Tabs index={ tabIndex } onChange={handleTabsChange}>
                <TabList mb={2}>
                    <Tab>All</Tab>
                    <Tab onClick={ onClickRemoveItem }>Active</Tab>
                    <Tab onClick={ onClickRemoveActive }>Completed</Tab>
                </TabList>
                
                <FormTodo handleAddItem={ handleAddItem }/>

                <TabPanels>
                    <TabPanel>
                        <TaskList 
                            list={list} 
                            setList={setList} 
                            tabIndex={tabIndex}
                            activeList={activeList}
                            setActiveList={setActiveList}
                            completedList={completedList}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TaskList 
                            list={list} 
                            setList={setList} 
                            tabIndex={tabIndex}
                            activeList={activeList}
                            setActiveList={setActiveList}
                            completedList={completedList}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TaskList 
                            list={list} 
                            setList={setList} 
                            tabIndex={tabIndex}
                            activeList={activeList}
                            setActiveList={setActiveList}
                            completedList={completedList}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
