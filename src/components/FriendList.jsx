import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({avatar, name, isOnline, id}) => (
      <li className={css.friendItem} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
      ))}
    </ul>
  );
}
