import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './users-slice';
import './users.css';

const Users = (props) => {
  const { history, users, fetchUsers } = props;
  const { data, loading } = users;
  const { ids, byId } = data;

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleClick = (id) => () => history.push(`/user/${id}`);
  const handleGoToMain = () => history.push("/");

  return (
    <div className="list">
      <button onClick={handleGoToMain}>Main</button>
      <h1>Users</h1>
      {loading && "USERS LOADING..."}
      {(ids.length > 0) && (
        ids.map(userId => 
          <div 
            onClick={handleClick(userId)} 
            key={userId}
            className="item"
          >
            {byId[userId].name}
          </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = { fetchUsers };
export default connect(mapStateToProps, mapDispatchToProps)(Users);
