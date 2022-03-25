import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@material-ui/core'
import { ChangeThemeStyles } from './_Styles'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeTheme as ChangeThemeAction } from '../../Redux/Actions/AppActions';
import TextField from '@material-ui/core/TextField';

const ChangeTheme = () => {
    const classes = ChangeThemeStyles();
    const dispatch = useDispatch();
    const [lmode,setLMode] = useState('Dark');
    const mode = useSelector(state => state.App.ThemeMode);
    useEffect(()=>{
        setLMode(mode);
    },[mode]);
    return (
        <Box>
            <Typography variant='h2' component='h2' className={classes.title}>ChangeTheme</Typography>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">change theme</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={lmode}
                    onChange={(e) => {
                        dispatch(
                            ChangeThemeAction(e.target.value)
                        )
                    }}
                >
                    <FormControlLabel value="Dark" className={classes.title} control={<Radio />} label="Dark" />
                    <FormControlLabel value="Light" className={classes.title} control={<Radio />} label="Light" />
                </RadioGroup>
            </FormControl>
            
        </Box>
    )
}

export default ChangeTheme;