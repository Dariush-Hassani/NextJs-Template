import React from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@material-ui/core'
import { ChangeThemeStyles } from './_Styles'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeTheme as ChangeThemeAction } from '../../Redux/Actions/AppActions';
const ChangeTheme = () => {
    const classes = ChangeThemeStyles();
    const dispatch = useDispatch();
    const mode = useSelector(state => state.App.ThemeMode);
    return (
        <Box>
            <Typography variant='h2' component='h2' className={classes.title}>ChangeTheme</Typography>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">change theme</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Dark"
                    name="radio-buttons-group"
                    value={mode === undefined ? 'Dark' : mode}
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