import React, { useState } from 'react'
import { Input, Button, Grid, GridItem } from '@chakra-ui/react'

export const FormTodo = ( props ) => {

    const [description, setDescription] = useState("");

    const { handleAddItem } = props;

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDescription("")
    }

    return (
        <>
            <form alignItems="center" mt={2} onSubmit={handleSubmit}>
                <Grid
                    gap={2}
                    justifyContent="center"
                    display="flex"
                > 
                    <GridItem>
                        <Input 
                            placeholder="Enter a new task"
                            value={description}
                            onChange={handleInputChange}
                        />
                    </GridItem>

                    <GridItem>
                        <Button
                            colorScheme='teal'
                            type="submit"
                            ml={2}
                        >
                            Add
                        </Button>
                    </GridItem>
                </Grid>
            </form>
        </>
    )
}
