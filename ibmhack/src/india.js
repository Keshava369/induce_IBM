import React from 'react';
import AreaSelector from './AreaSelector';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';


const india = () =>{
    return (
        <React.Fragment>
      <AppBar style={{ position: 'relative', backgroundColor: '#509609' , marginTop: "50px"}}>
      </AppBar>
      <CssBaseline />
      <Container >
          <AreaSelector />
      </Container>
    </React.Fragment>
    );
}

export default india;
