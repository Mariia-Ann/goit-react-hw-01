// import clsx from "clsx";
import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.userInfo}>
        <img
        className={css.avatar}
          src={image}
          alt="User avatar"
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span className={css.profileSpan}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span className={css.profileSpan}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <span className={css.profileSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
