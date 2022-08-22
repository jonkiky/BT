/* eslint-disable */
// material-ui
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

// styles
const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});

const styles = (props) => ({
    colorPrimary: {
        backgroundColor: '#000'
    },
    barColorPrimary: {
        backgroundColor: '#000'
    }
});

// ==============================|| LOADER ||============================== //
const Loader = (classes) => (
    <LoaderWrapper>
        <LinearProgress classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} />
    </LoaderWrapper>
);

export default withStyles(styles)(Loader);
