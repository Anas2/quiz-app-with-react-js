import {Grid } from "@mui/material";
import Button from '@mui/material/Button';
import './options.css';

function options(props){
    const {data, optionClick} = props;

    return(
        <Grid container>
            {data && Array.isArray(data) && data.length > 0
            ? data.map((x,i) => (
                <Grid className="p-3 options " key={i} item md={6}>
                    <Button onClick={() => optionClick(x)}
                    variant='contained' fullWidth>{x}</Button>
                </Grid>
            ))
        : null
        }
        </Grid>
    )
}

export default options;