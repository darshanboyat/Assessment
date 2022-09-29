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
  }, [data])
  
  const classes = Style();
  return (
    <div>
        {data.map((p) => (
            <div key={p.id}>
                <Card data-aos="fade-left" className={classes.card} sx={{ maxWidth: 345 }}>
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
                     <h4>⭐ {p.rating}</h4>
                     {p.stock < 50 && <h6 className={classes.warn}>Hurry! only a few items left.</h6>}
                     <button className={classes.addCart} onClick={() => addItem(props.data)}>Add to Cart</button>
                 </Card>
            </div>
      ))}
    </div>
  );
}

export default Page