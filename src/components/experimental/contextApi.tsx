import React, { useContext, useState } from 'react';
import { experimentalArr } from '../../data/testData';
import { ReactComponent as CloseSvg } from '../../assets/svg/close.svg';
import './push.css';

const UserContext = React.createContext<IInitialContext>({
  removePerson: () => {},
  users: [],
});

export function NotificationList() {
  const [users, setUsers] = useState(experimentalArr);

  const removePerson = (id: number) => {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    });
  };

  return (
    <UserContext.Provider value={{ removePerson, users }}>
      <List></List>
    </UserContext.Provider>
  );
}

export function List() {
  const { removePerson } = useContext(UserContext);
  const { users } = useContext(UserContext);
  return (
    <ul className="Push-list">
      {users.map((item: IPerson) => (
        <li className="Push-list__item" key={item.id}>
          <span className="Push-list__text">{item.name}</span>
          <button className="Push-list__btn" onClick={() => removePerson(item.id)}>
            <CloseSvg></CloseSvg>
          </button>
        </li>
      ))}
    </ul>
  );
}
