import React, { useEffect, useState } from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, } from '@material-ui/core'
import { ChangeDirectionStyles } from './_Styles'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLanguage } from '../../Redux/Actions/AppActions';
const ChangeDirection = () => {
    const classes = ChangeDirectionStyles();
    const dispatch = useDispatch();
    const [lmode, setLMode] = useState('rtl');
    const mode = useSelector(state => state.App.Language?.direction);
    useEffect(() => {
        setLMode(mode);
    }, [mode]);
    return (
        <Box className={classes.container} >
            <Typography className={classes.themeTitle}>Theme Mode</Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={lmode}
                    onChange={(e) => {
                        dispatch(ChangeLanguage({
                            lang: e.target.value === 'rtl' ? 'fa' : 'en',
                            direction: e.target.value,
                            title: e.target.value === 'rtl' ? 'فارسی' : 'english'
                        }))
                    }}
                >
                    <FormControlLabel value="rtl" className={classes.radio} control={<Radio />} label="Right to Left" />
                    <FormControlLabel value="ltr" className={classes.radio} control={<Radio />} label="Left to Right" />
                </RadioGroup>
            </FormControl>

        </Box>
    )
}

export default ChangeDirection