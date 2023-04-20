import { ImgHTMLAttributes } from "react";

import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  avatarUrl: string;
  hasBorder?: boolean;
}

export function Avatar({ avatarUrl, hasBorder = true, ...rest }: AvatarProps) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={avatarUrl} {...rest} />
  )
}