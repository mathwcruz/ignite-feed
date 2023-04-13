import styles from "./Avatar.module.css"

interface AvatarProps {
  avatarUrl: string;
  hasBorder?: boolean;
}

export function Avatar({ avatarUrl, hasBorder = true }: AvatarProps) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={avatarUrl} />
  )
}