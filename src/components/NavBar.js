import React from 'react'
import CartWidget from './CartWidget';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        display: "flex",
        justifyContent: "center"
    },
});

const NavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.root}>Proyecto E-Commerce</h1>
            <CartWidget />

            <Button href='/'><p>Zapatillas</p></Button>
            <Button href='/'><p>Camisetas</p></Button>
            <Button href='/'> <p>Pantalones</p></Button>
            <Button href='/'> <p>Medias</p></Button>
            <Button href='/'> <p>Gorras</p></Button>

        </div>
    )
}

export default NavBar
