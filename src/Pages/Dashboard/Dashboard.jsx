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
        <h2 className="text-2xl font-bold mb-6 px-6 pt-6">Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 px-6">
          <div className="p-6 rounded-lg shadow stat-card bg-blue-600 text-white">
            <div className="flex items-center">
              <i className="fas fa-chart-bar text-3xl mr-4"></i>
              <div>
                <h3 className="text-lg font-semibold">Today Views</h3>
                <p className="text-3xl font-bold">22,520</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow stat-card bg-green-600 text-white">
            <div className="flex items-center">
              <i className="fas fa-dollar-sign text-3xl mr-4"></i>
              <div>
                <h3 className="text-lg font-semibold">Earnings</h3>
                <p className="text-3xl font-bold">16,520</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow stat-card bg-purple-600 text-white">
            <div className="flex items-center">
              <i className="fas fa-users text-3xl mr-4"></i>
              <div>
                <h3 className="text-lg font-semibold">Users</h3>
                <p className="text-3xl font-bold">18,520</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow stat-card bg-red-600 text-white">
            <div className="flex items-center">
              <i className="fas fa-envelope text-3xl mr-4"></i>
              <div>
                <h3 className="text-lg font-semibold">Enquiry</h3>
                <p className="text-3xl font-bold">19,520</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6">
          {/* Recent Booking Table */}
          <div className="bg-white p-6 rounded-lg shadow">
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
          <div className="bg-white p-6 rounded-lg shadow">
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