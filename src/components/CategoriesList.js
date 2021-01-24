import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea, makeStyles, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux"

export const CategoriesList = () => {
    
    const productsByCategory = useSelector(state=>state.products)

    const useStyles = makeStyles({
        card: {
            margin: '10px'
        },
        image: {
            maxWidth: '300px',
            maxHeight: '400px'
        },
        progress: {
            marginTop: '20px'
        }
    });

    const classes = useStyles();

    const renderCategories = () => {

        const names = Object.keys(productsByCategory);
        return names.map((item, index)=>{
            return (
                    <Card className={classes.card}>
                        <CardActionArea >
                    <CardMedia component='img' className={classes.image}  image={productsByCategory[item][0].image} />
                    <CardContent>
                    <Typography variant='h5' align='center'>{item}</Typography>
                    </CardContent>
                        </CardActionArea>
                    </Card>)
        });
    }

    return (<Grid container
        direction="row"
        justify="center"
        >{Object.keys(productsByCategory).length !== 0 ? renderCategories() : <CircularProgress className={classes.progress}/>}</Grid>)
}
