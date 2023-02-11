import React, { useContext, useState } from 'react';
import { experimentalArr } from '../../data/testData';

export interface IPerson {
  name: string;
  id: number;
}

export interface IList {
  info: IPerson[];
}

interface IInitialContext {
  removePerson: (id: number) => void;
  users: IPerson[];
}

const UserContext = React.createContext<IInitialContext>({
  removePerson: () => {},
  users: [],
});

export function ContextApi() {
  const [users, setUsers] = useState(experimentalArr);

  const removePerson = (id: number) => {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    });
  };

  return (
    <UserContext.Provider value={{ removePerson, users }}>
      <h3>Prop drilling</h3>
      <List></List>
    </UserContext.Provider>
  );
}

export function List() {
  const { removePerson } = useContext(UserContext);
  const { users } = useContext(UserContext);
  return (
    <ul>
      {users.map((item: IPerson) => (
        <li className="list" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removePerson(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
