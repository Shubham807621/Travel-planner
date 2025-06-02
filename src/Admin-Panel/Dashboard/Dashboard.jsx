import React from 'react';
import './Dashboard.css'

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please check the console for errors.</h1>;
    }
    return this.props.children;
  }
}

const Dashboard = () => {
  return (
    <ErrorBoundary>
      <div className="dashboard-container">
        <h2 >Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="dashboard-cards mb-5 px-2">
          <div className="status-card ">
    
              <i className="fas fa-chart-bar"></i>
              <div>
                <h3 className="">Today Views</h3>
                <p className="">22,520</p>
              </div>
  
          </div>
          <div className="status-card">
           
              <i className="fas fa-dollar-sign "></i>
              <div>
                <h3 className="">Earnings</h3>
                <p className="">16,520</p>
              </div>
   
          </div>
          <div className="status-card">

              <i className="fas fa-users "></i>
              <div>
                <h3 className="">Users</h3>
                <p className="">18,520</p>
              </div>

          </div>
          <div className="status-card">
        
              <i className="fas fa-envelope "></i>
              <div>
                <h3 className="">Enquiry</h3>
                <p className="">19,520</p>
              </div>
         
          </div>
        </div>

        {/* Tables Section */}
        <div className="px-2">
          {/* Recent Booking Table */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Booking</h3>
            <p className="text-gray-600 mb-4">Airport Hotels The Right Way To Start A Short Break Holiday</p>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">SELECT</th>
                  <th className="p-2 text-left">USER</th>
                  <th className="p-2 text-left">NAME</th>
                  <th className="p-2 text-left">DATE</th>
                  <th className="p-2 text-left">CITY</th>
                  <th className="p-2 text-left">ENQUIRY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><input type="checkbox" checked className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2"><input type="checkbox" checked className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><input type="checkbox" checked className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2"><input type="checkbox" checked className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Package Enquiry Table */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Package Enquiry</h3>
            <p className="text-gray-600 mb-4">Airport Hotels The Right Way To Start A Short Break Holiday</p>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">SELECT</th>
                  <th className="p-2 text-left">USER</th>
                  <th className="p-2 text-left">NAME</th>
                  <th className="p-2 text-left">DATE</th>
                  <th className="p-2 text-left">CITY</th>
                  <th className="p-2 text-left">ENQUIRY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><input type="checkbox" className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2"><input type="checkbox" className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><input type="checkbox" className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2"><input type="checkbox" className="form-checkbox" /></td>
                  <td className="p-2"><img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">12 May</td>
                  <td className="p-2">Japan</td>
                  <td className="p-2"><span className="enquiry-badge">15</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;