import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import { ChangeDirectionStyles } from './_Styles'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLanguage } from '../../Redux/Actions/AppActions';
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