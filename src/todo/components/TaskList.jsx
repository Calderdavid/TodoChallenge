import React, {useState} from 'react'
import { CheckBox } from './CheckBox'
import { Button } from '@chakra-ui/react'

export const TaskList = ( props ) => {

  const { 
    list, 
    setList, 
    tabIndex, 
    activeList, 
    completedList
  } = props;
  

  const onChangeStatus = ( e ) => {

    const { name, checked } = e.target;
    
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));

    setList(updateList);
  }
  
  const onClickRemoveItem = e => {
    
    const updateList = list.filter(item => !item.done);

    setList(updateList);
  };

  const completed = completedList.map(( item ) => (
    <>
      <CheckBox key={item.id} data={item} onChange={onChangeStatus} mt={2} />
      <br/>
    </>
  )) 

  const active = activeList.map(( item ) => (
    <>
      <CheckBox key={item.id} data={item} onChange={onChangeStatus} mt={2}/>
      <br/>
    </>
  )) 

  
  const chk = list.map(( item ) => (
    <>
      <CheckBox key={item.id} data={item} onChange={onChangeStatus} mt={2}/>
      <br/>
    </>
  )) 
  
  if ( tabIndex === 0 ) {
    return (
      <>
          <>
            {list.length ? chk : "No tasks yet."}
            {
              list.length ? (
                <p>
                  <Button onClick={onClickRemoveItem}>
                    Delete all done
                  </Button>
                </p>
              ) : null
            }
          </>
      </>
    )
  }

  if ( tabIndex === 1 ) {
    return (
      
      <>
        {activeList.length ? active : "No tasks yet."}
      </>
    )    
  }

  if ( tabIndex === 2 ) {
    return (
      
      <>
        {completedList.length ? completed : "No tasks yet."}
      </>
    )    
  }
}
