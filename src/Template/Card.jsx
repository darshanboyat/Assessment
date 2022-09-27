import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useCart } from 'react-use-cart';
import Typography from '@mui/material/Typography';
import Style from '../style'

import {useState, useEffect} from 'react'
function Page(props) {

  const { addItem } = useCart();
  
  const [data, setData] = useState([{}])
  useEffect(() => {
        setData([props.data])
  }, [])
  
  const classes = Style();
  return (
    <div>
        {console.log(props.data)}
        {data.map((p) => (
            <div key={p.id}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                     <CardMedia
                         component="img"
                         height="140"
                         image={p.thumbnail}
                         alt="Product"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                             {p.title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                             {p.description}
                         </Typography>
                     </CardContent>
                     <button onClick={() => addItem(props.data)}>Add to Cart</button>
                 </Card>
            </div>
      ))}
    </div>
  );
}

export default Page