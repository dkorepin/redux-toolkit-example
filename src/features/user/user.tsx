import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from './user-slice';
import { isEmpty } from '../../common/utils';
import './user.css';

const User = (props) => {
  const { match, users, user, fetchUserPosts, history } = props;
  const { params } = match;
  const { id } = params;
  const { data: userData, loading } = user;
  const { data: usersData } = users;
  const { byId: usersById } = usersData;
  const { byId: postsById, ids: postsIds } = userData;

    React.useEffect(() => {
    fetchUserPosts(id); 
  }, [fetchUserPosts, id]);

  const handleClick = () => history.push("/users");

  return (
    <div>
      <button onClick={handleClick}>Users</button>
      <h1>User</h1>
      {isEmpty(usersById) && <div>Empty data</div>}
      {!isEmpty(usersById) && (
        <>
          <div>Name: {usersById[id].name}</div>
          <div>Email: {usersById[id].email}</div>
          <div>Nick: {usersById[id].username}</div>
        </>
      )}
      <div className="posts">
        <h2>Posts</h2>
        {loading && "POSTS LOADING..."}
        {(postsIds.length > 0) && (
          postsIds.map(postId => 
            <div 
              key={postId}
              className="post"
            >
              <div><b>title:</b> {postsById[postId].title}</div>
              <div><b>content:</b> {postsById[postId].body}</div>
            </div>
      ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ users: state.users, user: state.user });
const mapDispatchToProps = { fetchUserPosts };
export default connect(mapStateToProps, mapDispatchToProps)(User);
