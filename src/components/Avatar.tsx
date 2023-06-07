import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

// A interface AvatarProps extende ImgHTMLAttributes pois o componente Avatar retorna uma imagem e queremos que seja capaz de ter todas as
//propriedades de uma imagem

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

// A função Avatar recebe a propriedade hasBorder e também todas as outras propriedades que forem passadas para ela

// Com isso, utilizamos as props com o spread operator para passar todas as propriedades recebidas para a imagem

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
