import PropTypes from "prop-types";
import styles from "./Avatar.module.css";

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
  alt: PropTypes.string,
};

export function Avatar({
  hasBorder = true,
  src,
  alt,
}: PropTypes.InferProps<typeof Avatar.propTypes>) {
  const altText = alt !== null ? alt : undefined;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={altText}
    />
  );
}
