import * as React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';



//import ButtonBase from '@material-ui/core/ButtonBase';

interface Props {
  imageUrl: string
}

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: 270,
      height: 200,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

export const CardImage: React.FC<Props> = ({
  imageUrl
}) => {
  const classes = useStyles();
  // container justify="center"を付与すると画像が上に来て、取ると横になる
  return (
    <Grid item container justify="center">
      <Wrapper className={classes.image}>
        <img className={classes.img} alt="complex" src={imageUrl} />
      </Wrapper>
    </Grid>
  )
}


const Wrapper = styled.div`
  padding: 0;
  position: relative;
  align-items: center;
  vertical-align: middle;
  background-color: transparent;
  webkit-appearance: none;
  webkit-tap-highlight-color: transparent;
`
