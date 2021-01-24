import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea, makeStyles, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux"

export const CategoriesList = () => {
    
    const productsByCategory = useSelector(state=>state.products)

    const useStyles = makeStyles({
        image: {
            width: '200px',
            height: '300px',
            backgroundSize: 'contain'
        },
        progress: {
            marginTop: '20px'
        },
        title: {
            textTransform: 'capitalize'
        }
    });

    const classes = useStyles();

    const renderCategories = () => {

        const names = Object.keys(productsByCategory);
        return names.map((item, index)=>{
            return (<Grid item key={`card_${index}`}>
                        <Card>
                            <CardActionArea >
                                <CardMedia className={classes.image}  image={productsByCategory[item][0].image} />
                                <CardContent>
                                    <Typography className={classes.title} variant='h5' align='center'>{item}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>)
        });
    }

    return (<Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        >{Object.keys(productsByCategory).length !== 0 ? renderCategories() : <CircularProgress className={classes.progress}/>}</Grid>)
}
