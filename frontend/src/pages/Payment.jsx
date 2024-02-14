import  { useState, useEffect } from 'react';
import AdminNav from "../components/AdminNav";
import instance from '../services/axios';
import CustomSidebar from '../components/CustomSidebar';


const Payment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = () => {
    instance.get('http://localhost:8181/api/v1/user/payment')
      .then(response => {
        setPayments(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching payments:', error);
      });
  };

  return (
    <div>
      <header>
        <AdminNav />
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: '250px', flexShrink: 0 }}>
            <CustomSidebar style={{height: '100%'}} />
        </div>
      <div className='enq'>
        <h1 className="user-list-title">Payments</h1>
        <table className="user-table">
          <thead className='user-table-head'>
            <tr>
              <th className="user-id-header">Payment ID</th>
              <th className="username-header">User ID</th>
              <th className="email-header">Course ID</th>
              <th className="role-header">Payment</th>
              <th className="delete-header">Payment Type</th>
              <th className="delete-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.paymentId} className="user-row">
                <td className="user-id">{payment.paymentId}</td>
                <td className="username">{payment.userId}</td>
                <td className="email">{payment.courseId}</td>
                <td className="role">{payment.payment}</td>
                <td className="delete-action">{payment.paymentType}</td>
                <td className="action">
                  <button className="resolve-button" onClick={() => console.log('Handle Action')}>Action</button>
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

export default Payment;
