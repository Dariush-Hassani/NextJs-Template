import React, { useEffect, useState } from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, } from '@material-ui/core'
import { ChangeLanguageStyles } from './_Styles'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLanguage as ChangeLanguageAction } from '../../Redux/Actions/AppActions';
import { useRouter } from 'next/router';
import { languages } from '../../Utils/Config';
import Text from '../_GlobalComponents/Text';
const ChangeLanguage = () => {
    const classes = ChangeLanguageStyles();
    const dispatch = useDispatch();
    const [lmode, setLMode] = useState('fa');
    const router = useRouter();
    const mode = useSelector(state => state.App.Language?.lang);
    useEffect(() => {
        setLMode(mode);
    }, [mode]);
    return (
        <Box className={classes.container} >
            <Typography className={classes.themeTitle}>
                <Text value="Language" />
            </Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={lmode}
                    onChange={(e) => {
                        dispatch(ChangeLanguageAction({
                            lang: e.target.value,
                            direction: languages.find(x => x.lang === e.target.value)?.direction,
                            title: languages.find(x => x.lang === e.target.value)?.title
                        }));
                        router.reload();
                    }}
                >
                    {languages.map((item, i) =>
                        <FormControlLabel key={item.lang} value={item.lang} className={classes.radio} control={<Radio />} label={item.title} />
                    )}
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default ChangeLanguage