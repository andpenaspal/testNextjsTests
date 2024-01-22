import { FunctionComponent } from "react";
import Box from '@mui/material/Box';

const Check: FunctionComponent = () => {
  return (
    <Box 
    sx={{
      marginLeft: '2px',
      bgcolor: {xs: 'red', lg: 'blue'}
    }}
    data-testid='check-element'>
      Test
    </Box>
  )
}

export default Check;