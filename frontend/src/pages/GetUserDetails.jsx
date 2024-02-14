import { useState, useEffect } from 'react';
import "../assets/css/user.css";
import { userList } from '../services/user';
import instance from '../services/axios';
import AdminNav from '../components/AdminNav';
import CustomSidebar from '../components/CustomSidebar';

const GetUserDetails = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    userList()
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = (userId) => {
    instance.delete(`http://localhost:8181/api/v1/user/deleteuser/${userId}`)
    .then(response => {
        console.log(response.data.data+"user deleted successfully");
        fetchUsers(); 
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
    
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <header>
        <AdminNav />
    </header>
    <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: '250px', flexShrink: 0 }}>
            <CustomSidebar style={{height: '100%'}} />
        </div>
    <div className="user-details-container">
      <h1 className="user-list-title">User Details</h1>
      <table className="user-table">
        <thead className='user-table-head'>
          <tr>
            <th className="user-id-header">User ID</th>
            <th className="username-header">Username</th>
            <th className="email-header">Email</th>
            <th className="role-header">Role</th>
            <th className="delete-header">Actions</th> {/* Added delete action header */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            // Check if user's role is not 'ADMIN' before rendering
            user.role !== 'ADMIN' && (
              <tr key={user.id} className="user-row">
                <td className="user-id">{user.id}</td>
                <td className="username">{user.username}</td>
                <td className="email">{user.email}</td>
                <td className="role">{user.role}</td>
                <td className="delete-action">
                  <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button> 
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default GetUserDetails;
