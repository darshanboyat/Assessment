import Card from '../Template/Card'
import axios from 'axios'
import React, { useState } from 'react'
import { Container, Grid } from '@mui/material'


function Products() {
    const [product, setProduct] = useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const prod = await axios.get('https://dummyjson.com/products?limit=100')

            setProduct([...prod.data.products])
        }
        fetchData()
    }, [])


    // }
    return (
        <>
                <Container>
                    <Grid container spacing={1}>
                        {product.map(item => {
                            return (
                                <Grid item xs={4} key={item.id}>
                                    <Card thumbnail={item.thumbnail} title={item.title} id={item.id} description={item.description} data={item} />
                                </Grid>)
                        })}
                    </Grid>
                </Container>
        </>
    )
}

export default Products