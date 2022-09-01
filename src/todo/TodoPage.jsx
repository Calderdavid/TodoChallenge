import { Grid, GridItem, TabList, Tabs, Text, Tab} from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

export const TodoPage = () => {
  return (
    <>
        <Grid
            templateRows='repeat(2, 5fr)'
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
                </Tabs>
            </GridItem> 





        </Grid>
    
    
    
    </>
    
  )
}
