import * as React from 'react';
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { lightBlue } from '@mui/material/colors';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon }      from '@fortawesome/react-fontawesome'
import { faCheck }  from '@fortawesome/free-solid-svg-icons'
 // import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardAlt    from '@mui/icons-material/KeyboardAlt';

export default function CardOne(props) {
  
  const {data} = props;
  const [ indexcard, setIndexcard ] = React.useState(0);
  const [ txtingles, setTxtingles ] = React.useState(data[indexcard].english.trim().toLowerCase());
  const [ txtpractica, setTxtpractica ] = React.useState('');
  const [ comparar, setComparar ] = React.useState(false);

  React.useEffect(() =>{
    setTxtingles( data[indexcard].english.trim().toLowerCase() );
    setTxtpractica('');
    setComparar(false);
  },[indexcard, data])

  const changeCard = ()=>{
     let min = 0;
     let max = data.length;
     let newindex = indexcard + 1;
     
     if ( newindex >= min && newindex <= max){
        setIndexcard(newindex);
     }else{
        setIndexcard(min);
     }
 }

  const handlePractica = (e)=>{

         let valoring = e.target.value;
         setTxtpractica( e.target.value );
          

         if ( valoring.trim().toLowerCase() === txtingles ){
             setComparar( true );
         }else{
             setComparar( false );
         }
  }
  return (
    <>
      <Card sx={{ mt:2.5, minWidth: 275, backgroundColor: lightBlue[100] }} >
          <CardContent sx={{ color:'blue'}} >
              <Typography  color="text.secondary">
                Nro. {data[indexcard].row}
              </Typography>
              <Typography variant="h4" component="div">
                {data[indexcard].english}
              </Typography>

              <Typography sx={{ mb: 1, mt:1 }} variant="h5" color="text.secondary">
                {data[indexcard].spanish}
              </Typography>   
        </CardContent>
        <CardActions>
          <Button size="medium" 
               variant="contained" 
                 color="primary" 
               onClick={changeCard}>Siguiente</Button>
        </CardActions>
      </Card>
             <Grid container  spacing={2}>
                <Grid item xs={6}>
                    <Box
                      component="form"
                      sx={{ mt: 3, width: '100%' }}
                      noValidate
                      autoComplete="off"
                    >
                    <TextField id="idtextpractica" label="Practicar" 
                          variant="outlined" 
                          sx={{width:'100%'}}
                          onChange={handlePractica}
                          value={txtpractica}
                          disabled={comparar}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">
                              <KeyboardAlt />
                              </InputAdornment>,
                          }}
                        
                    />
                     </Box>    
                 </Grid>
                 <Grid item xs={1}>
                      <Box sx={{ mt: 3, width: '100%' }}> 
                           { comparar && 
                              <FontAwesomeIcon icon={ faCheck} size="lg"   />  
                            }
                      </Box>  
                  </Grid>
            </Grid> 

          
    {/* 
        <Typography>
            {"Estado : " + (comparar ? "igual !!!":"Teclear") }
        </Typography>
        <Typography>{txtpractica.trim().toLowerCase()}</Typography>
    */} 
    </>
  );
}