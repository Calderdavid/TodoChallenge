import React from 'react'
import { CheckBox } from './CheckBox'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const TaskList = (props) => {

  const { list, setList } = props;

  const onChangeStatus = (e) => {

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




  const chk = list.map((item) => (
    <>
      <CheckBox key={item.id} data={item} onChange={onChangeStatus} mt={2}/>
      <br/>
    </>

  ))


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
            ) : null}
        </>
    </>
  )
}
