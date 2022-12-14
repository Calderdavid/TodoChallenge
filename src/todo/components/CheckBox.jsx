import React from 'react'
import { Checkbox } from '@chakra-ui/react'

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
          mb={3}
        >{description}</Checkbox>
      </>
    )
}
