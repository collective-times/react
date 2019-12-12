import * as React from 'react'
import Grid from '@material-ui/core/Grid';

import { CardImage } from "../../atoms/CardImage"
import { CardDescription } from "../../atoms/CardDescription"

interface Props {
}

export const Card: React.FC<Props> = ({}) => {
  return (
    <Grid container spacing={2} direction="row">
      <CardImage imageUrl={"https://www.ayasa-violin.com/images/second/img_dis11.jpg"} />
      <CardDescription title={"The 2019 DevOps RoadMap"} description={"DevOpsエンジニアになるためのイラストガイド（関連コースへのリンク付き） DevOpsは今とてもホットなテーマです。多くの友人、同僚、上級開発者である知人がDevOpsのエンジニアとなり自分のいる組織の中で第一人者に"}/>
    </Grid>
  )
}