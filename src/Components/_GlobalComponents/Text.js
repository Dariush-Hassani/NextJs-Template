import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const Text = ({ value }) => {
    const { t } = useTranslation('common');
    return (
        <>{t(value)}</>
    )
}

export default Text;