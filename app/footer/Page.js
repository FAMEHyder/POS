import { Grid ,Box} from "@mui/material";

function footer() {


    return (
        <Grid height={'70vh'}>
            <Box border={'2px solid red'} height={'100%'} width={'33%'}></Box>
            <Box border={'2px solid black'} height={'100%'} width={'33%'}></Box>
            <Box border={'2px solid red'} height={'100%'} width={'33%'}></Box>

        </Grid>
    )
}

export default footer;