/* eslint-disable max-len */
import style from './AdminPanel.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersRequestAsync } from '../../../../../store/usersRequest/usersRequestActions';
import UserFormAdminPanel from './UserFormAdminPanel';
import Preloader from '../../../../../UI/Preloader';

export const AdminPanel = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersRequestAsync());
  }, []);

  return (
    <section className={style.admin}>
      <h1 className={style.adminTitle}>AdminPanel</h1>
      <ul className={style.userList}>
        {users.status === 'loading' ? (
          <Preloader color={'white'} />
        ) : users.status === 'loaded' ? (
          users.accounts.length > 0 &&
          users.accounts.map((user) =>
            (user.id === '00001' ? null : (
              <UserFormAdminPanel key={user.id} user={user} />
            ))
          )
        ) : (
          <></>
        )}
      </ul>
    </section>
  );
};
