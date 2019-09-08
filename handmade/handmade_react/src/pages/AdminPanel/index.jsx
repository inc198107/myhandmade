import React from 'react';
import { Input, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxWidth: '400px',
        minHeight: '200px',
        margin:"20% auto"
        },
    field: {
        width: '350px'
        }
})

function AdminPage() {
    const style = useStyles();
    return (
        <Paper className={style.form}>
            <h3>My Handmade Admin</h3>
            <Input name="login" type="text" placeholder="login" className={style.field} />
            <Input name="password" type="password" placeholder="Password" className={style.field} />
            <Button type="button" size="medium" variant="contained">
                Login
            </Button>
        </Paper>
    )
}
export default AdminPage