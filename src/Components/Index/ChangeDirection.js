import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ChangeDirectionStyles } from './_Styles'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLanguage } from '../../Redux/Actions/AppActions';
import { Box, Typography } from '@material-ui/core';
const ChangeDirection = () => {
    const classes = ChangeDirectionStyles();
    const dispatch = useDispatch();
    const dir = useSelector(state => state.App.Language?.direction);
    return (
        <Box>
            <Typography variant='h2' component='h2' className={classes.title}>ChangeDirection</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Direction</InputLabel>
                <Select
                    className={classes.selectt}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dir === undefined ? 'rtl' : dir}
                    onChange={(e) => {
                        dispatch(ChangeLanguage({
                            lang: e.target.value === 'rtl' ? 'fa' : 'en',
                            direction: e.target.value,
                            title: e.target.value === 'rtl' ? 'فارسی' : 'english'
                        }))
                    }}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        getContentAnchorEl: null
                    }}
                >
                    <MenuItem value={'rtl'}>Right to left</MenuItem>
                    <MenuItem value={'ltr'}>Left to Right</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default ChangeDirection