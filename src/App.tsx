import React, { useState, useEffect } from 'react';
import { Briefcase, Download, Users, TrendingUp } from 'lucide-react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import { Employee } from './types/Employee';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Load employees from localStorage on component mount
  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      try {
        setEmployees(JSON.parse(savedEmployees));
      } catch (error) {
        console.error('Error loading employees from localStorage:', error);
      }
    }
  }, []);

  // Save employees to localStorage whenever employees array changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee: Employee) => {
    setEmployees(prev => [...prev, employee]);
  };

  const deleteEmployee = (id: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
                <p className="text-gray-600 mt-1">Manage employee records with Excel export</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-700">
                    {employees.length} Employees
                  </span>
                </div>
                {employees.length > 0 && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-700">
                      ${Math.round(employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length).toLocaleString()} Avg Salary
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome to Employee Management System</h2>
              <p className="text-blue-100 text-lg">
                Add, manage, and export employee data with ease. All data is stored locally in your browser.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{employees.length}</div>
                    <div className="text-blue-100 text-sm">Total Employees</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {new Set(employees.map(emp => emp.department)).size}
                    </div>
                    <div className="text-blue-100 text-sm">Departments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Form */}
        <EmployeeForm onAddEmployee={addEmployee} />

        {/* Employee Table */}
        <EmployeeTable 
          employees={employees} 
          onDeleteEmployee={deleteEmployee}
        />

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Employee Management</h3>
            <p className="text-gray-600">
              Add, view, and manage employee records with comprehensive form validation and data integrity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excel Export</h3>
            <p className="text-gray-600">
              Export employee data to Excel format with proper formatting for easy analysis and record-keeping.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
            <p className="text-gray-600">
              View real-time statistics including salary averages, department distribution, and leave analytics.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Employee Dashboard</div>
                <div className="text-sm text-gray-400">Built with React, TypeScript & TailwindCSS</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Data stored locally in your browser
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;