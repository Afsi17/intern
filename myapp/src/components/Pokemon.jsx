import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {Grid} from '@mui/material/Grid';





const Pokemon = () => {
    var [Poki, setPoki] = useState([])

    axios.get("https://dummyapi.online/api/pokemon")
        .then((response) => {
            console.log(respone)
            setPoki(response.data)
        })
  return (
      <div>
          <Grid container spacing={2}>
              {Poki.map((val) => {
                  return (
                      <Grid item xs={8} sm={8} md={4}>
            

                          <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                  sx={{ height: 250 }}
                                  image="val."
                                  title="Pokemon"
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      Lizard
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                      Lizards are a widespread group of squamate reptiles, with over 6,000
                                      species, ranging across all continents except Antarctica
                                  </Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small">Share</Button>
                                  <Button size="small">Learn More</Button>
                              </CardActions>
                          </Card>
                      </Grid>
                  )
              })}
              </Grid>
    </div>
  )
}

export default Pokemon
