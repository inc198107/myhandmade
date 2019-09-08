import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../../components/Footer/footer';

const useStyles = makeStyles({
    main: {
        display:'flex',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        height:'calc(100vh - 100px)'
    }
})

export default function Landing() {
    const style = useStyles();
    return (
        <Fragment>
            <div className={style.main}>
                <h1>Handmade</h1>
            </div>
            <Footer />
        </Fragment>
    )
}
