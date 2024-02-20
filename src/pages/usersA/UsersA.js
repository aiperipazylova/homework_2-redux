import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/actions';


export default function UsersA () {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAddUser = () => {
    dispatch(addUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h1>Таблица</h1>
      <div>
        <input type="text" value={name} placeholder="Имя" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} placeholder="Почта" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleAddUser}>Добавить</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Почта</th>
            <th>Пароль</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

