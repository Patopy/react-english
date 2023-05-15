
import React from 'react';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ListAll( props ) {
  const {data} = props;   
  return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            { data.map(ele =>{ return(<>
                <ListItem alignItems="flex-start" key={ele.row}>
                    <ListItemAvatar>
                    <Avatar>{ele.row-1}</Avatar>
                    </ListItemAvatar>
                <ListItemText
                    primary={ele.english}
                    secondary={
                    <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secundary"
                        >
                        {ele.spanish}
                        </Typography>
                    
                    </React.Fragment>
                    }
                />
                </ListItem>

                <Divider variant="inset" component="li" />
                </>)

            })
            }
        </List>
    </div>
  );
}

export default ListAll;
