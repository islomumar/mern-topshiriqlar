const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles({
    root: {
        width: 400,
        height: 300,
        textAlign: 'center'
    },
    inputMarginTop: {
        marginTop: 20
    },
    input: {
        width: 350,
    },
    button: {
        marginTop: 60,
        marginRight: 5
    },
    userText: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 700,
        fontSize: 20,
        color: '#3F51B5'
    }
})