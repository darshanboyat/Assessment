import {makeStyles} from '@material-ui/core'

export default  makeStyles(() => ({

    html:{
        scrollBehavior: 'smooth'
    },
    App:{
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'
    },
    heading: {
        fontFamily: 'cursive'
    },
    card:{
        margin: '30px',
        height: '67vh',
        boxShadow: '5px 10px 30px black'
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    link:{
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
        padding: '0px 6px',
        borderRadius: '2rem',
 
        '&:hover':{
            backgroundColor: 'white',
            color: 'black',
            transition: '.5s ease-in-out'
        }
    },
    cart:{
        marginLeft: '10%',
        marginTop: '5% !important',
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartHead:{
        paddingLeft: '10rem'
    },
    partition:{
        backgroundColor: 'white',
        height: '2vh'
    },
    head:{
        color: 'white',
        textDecoration: 'none',
        '&:hover':{
            color: 'white'
        }
    },
    Head:{
        textAlign: 'center',
        borderBottom: '2px solid white'
    },
    wrapper:{
        borderTop: '5px solid black',
        itemAlign: 'center',
        borderTop: '5px solid white',
    },
    list:{
        display: 'flex',
        itemAlign: 'center',
        borderBottom: '2px solid grey',
        marginBottom: '10px',
        justifyContent: 'space-around'
    },
    prodName:{
        marginTop: '10%',
    },
    btn:{
        borderRadius: '2rem 0rem 0rem 2rem',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: 'orange',
        color: 'white',
        height: '5vh'
    },
    btn1:{
        borderRadius: '0rem 2rem 2rem 0rem',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: 'green',
        color: 'white',
        height: '5vh'
    },
    btn2:{
        marginLeft: '5px',
        borderRadius: '2rem 2rem 2rem 2rem',
        padding: '5px',
        backgroundColor: 'red',
        color: 'white',
        height: '5vh'
    },
    btns:{
        marginTop: '10%'
    }
})

);