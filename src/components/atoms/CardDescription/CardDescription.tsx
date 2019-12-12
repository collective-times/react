import * as React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string
  description: string
}

export const CardDescription: React.FC<Props> = ({
  title,
  description
}) => {
  return (
    <Grid item xs container direction="column">
      <Grid item xs>
        <Typography gutterBottom variant="subtitle1" align="left" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" align="left"  paragraph={true} flex-grow="2">
          {description}
        </Typography>
      </Grid>
      <Typography variant="caption" align="right" color="textSecondary">
        2019/12/31 23:59
      </Typography>
    </Grid>
  )
}
