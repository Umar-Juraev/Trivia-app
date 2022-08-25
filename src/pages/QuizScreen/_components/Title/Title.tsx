import { FC } from "react";
import classes from "./Title.module.scss";


type Props = {};

const Title:FC<Props> = () => {
  return (
    <h1 className={classes.title}>Entertainment: <br /> Videogames</h1>
  )
}

export default Title