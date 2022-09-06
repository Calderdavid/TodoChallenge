import React from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

export const CheckBox = (props) => {

  const {
    onChange,
    data: { id, description, done }
  } = props;

    return (
      <>
        <Checkbox 
          name={id}
          defaultChecked={done}
          onChange={onChange}
        >{description}</Checkbox>
      
      
      </>
    )
}
