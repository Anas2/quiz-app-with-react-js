import { Box, Typography, Grid } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
// import InputUnstyled from '@mui/base/InputUnstyled';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './quizForm.css';


function QuizForm() {

    const [userIn, setUserIn] = useState("")
    const [clickBtn, setClickBtns] = useState([])
    const [state,setState] = useState(true);
    const [correctKey , setCorrectKey] = useState("Correct key...");

    let userInput = (e) => {
        // e.target.value.length >= 4 
        if(e.target.value.trim()){
            setState(false)
            setUserIn(e.target.value);
        }else{
            setState(true);
        }     
        // console.log(e.target.value);
    }
    let optionFunc = () => {

        setClickBtns([...clickBtn, userIn]);
        // console.log(clickBtn);
    }

  

    return (
        <Box sx={{ padding: "50px" }}>
            <Typography variant="h5" >Post Question Form</Typography>
            <Box className="main" sx={{ padding: "20px", border: '2px solid', width: "100%" }}>
                <TextareaAutosize aria-label="minimum height" minRows={8} placeholder="Write question ..." style={{ width: '100%' }} />
                <label >Options</label> <br />
                <input type="text" name="" placeholder="option..." onChange={userInput} /> <Button disabled={state} variant='contained' sx={{ fontSize: "20px" }} onClick={(e) => { optionFunc() }}  >+</Button> <br />
                <Box>
                    <Grid container>
                        {clickBtn && Array.isArray(clickBtn) && clickBtn.length > 0 ? clickBtn.map((x, i) => {
                            return (
                                <Grid className="p-3 a" key={i} item md={6}>
                                    <Button onClick={(e)=>{ setCorrectKey(e.target.innerText) }} variant='contained' fullWidth>{x}</Button>
                                </Grid>)
                            // <Button variant='contained'  fullWidth key={i} >{x}</Button>
                        }) : null
                    }
                    </Grid>
                </Box>
                <label className='mt-2'>Correct Answer Key</label> <br />
                <input type="text" name="" value={correctKey} disabled /> <br />
                <Button variant='contained' className='mt-2' >Submit</Button>
            </Box>

        </Box>

    )
}

export default QuizForm;