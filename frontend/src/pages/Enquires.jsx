import { useState, useEffect } from 'react';
import {  Button } from 'rsuite';
import AdminNav from "../components/AdminNav";
import instance from '../services/axios';
import "../assets/css/enquiry.css";
import CustomSidebar from '../components/CustomSidebar';


const Enquires = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = () => {
    instance.get('http://localhost:8181/api/v1/user/enquiry')
      .then(response => {
        setEnquiries(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching enquiries:', error);
      });
  };

  const handleResolveEnquiry = (enquiryId) => {
    // Implement your logic to resolve the enquiry
    console.log(`Resolve enquiry with ID ${enquiryId}`);
  };

  return (
    <div>
      <header>
        <AdminNav />
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
             {/* Sidebar */}
                <div style={{ width: '250px', flexShrink: 0 }}>
                    <CustomSidebar />
                </div>
      <div className='enq'>
        <h1 className="user-list-title">Enquiries</h1>
        <table className="user-table" >
          <thead className='user-table-head'>
            <tr>
              <th className="user-id-header">Enquiry ID</th>
              <th className="username-header">User ID</th>
              <th className="email-header">Course ID</th>
              <th className="role-header">Email</th>
              <th className="delete-header">Enquiry</th>
              <th className="delete-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(enquiry => (
              <tr key={enquiry.enquiryId} className="user-row">
                <td className="user-id">{enquiry.enquiryId}</td>
                <td className="username">{enquiry.userId}</td>
                <td className="email">{enquiry.courseId}</td>
                <td className="role">{enquiry.email}</td>
                <td className="delete-action">{enquiry.enquiry}</td>
                <td className="delete-action">
                  <Button className="delete-button" color="green" size="xs" onClick={() => handleResolveEnquiry(enquiry.enquiryId)}>Resolve</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Enquires;
