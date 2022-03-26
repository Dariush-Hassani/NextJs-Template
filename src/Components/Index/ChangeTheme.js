import React, { useEffect, useState } from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, } from '@material-ui/core'
import { ChangeThemeStyles } from './_Styles'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeTheme as ChangeThemeAction } from '../../Redux/Actions/AppActions';
import Text from '../_GlobalComponents/Text';
const ChangeTheme = () => {
    const classes = ChangeThemeStyles();
    const dispatch = useDispatch();
    const [lmode,setLMode] = useState('Dark');
    const mode = useSelector(state => state.App.ThemeMode);
    useEffect(()=>{
        setLMode(mode);
    },[mode]);
    return (
        <Box className={classes.container} >
            <Typography className={classes.themeTitle}>
                <Text value="theme"/>
            </Typography>
            <FormControl>
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
                    <FormControlLabel value="Dark" className={classes.radio} control={<Radio />} label={<Text value="Dark"/>} />
                    <FormControlLabel value="Light" className={classes.radio} control={<Radio />} label={<Text value="Light"/>}  />
                </RadioGroup>
            </FormControl>
            
        </Box>
    )
}

export default ChangeTheme;