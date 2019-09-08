import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white'
    }
})

function Landing() {
    const style = useStyles();
    return (
        <div className={style.main}>
            <h1>HELLO WORLD!</h1>
        </div>
    )
}
export default Landing