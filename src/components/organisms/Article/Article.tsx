import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Article as ArticleEntity } from "../../../entities/article"
import { Link } from "../../atoms/Link"

type Props = {
    article: ArticleEntity
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    card: {
    },
    media: {
      height: 140,
    },
  }),
);

export const Article: React.FC<Props> = ({ article }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link href={article.articleUrl}>
          <CardMedia
            className={classes.media}
            image={article.imageUrl}
            title="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { article.title }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { article.description }
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}
