import React, { useState } from 'react';
import { Search, Download, Trash2, Users, Building, Mail, Phone, MapPin, DollarSign, Calendar } from 'lucide-react';
import { Employee } from '../types/Employee';
import { exportToExcel } from '../utils/excelExport';

interface EmployeeTableProps {
  employees: Employee[];
  onDeleteEmployee: (id: string) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onDeleteEmployee }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');

  // Get unique departments
  const departments = Array.from(new Set(employees.map(emp => emp.department))).sort();

  // Filter employees based on search and department
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = !departmentFilter || employee.department === departmentFilter;
    
    return matchesSearch && matchesDepartment;
  });

  const handleExport = () => {
    if (filteredEmployees.length === 0) {
      alert('No employee data to export');
      return;
    }
    exportToExcel(filteredEmployees, 'EmployeeData.xlsx');
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}'s record?`)) {
      onDeleteEmployee(id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-100 rounded-lg">
          <Users className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Employee Directory</h2>
          <p className="text-gray-600">
            {employees.length} total employees • {filteredEmployees.length} showing
          </p>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or employee ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="md:w-48">
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleExport}
          disabled={filteredEmployees.length === 0}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <Download className="w-5 h-5" />
          Export Excel
        </button>
      </div>

      {/* Employee Table */}
      {filteredEmployees.length === 0 ? (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {employees.length === 0 ? 'No employees added yet' : 'No employees match your search'}
          </h3>
          <p className="text-gray-500">
            {employees.length === 0 
              ? 'Add your first employee using the form above' 
              : 'Try adjusting your search criteria'
            }
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Contact</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Department</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Salary</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Leaves</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Join Date</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr 
                  key={employee.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                          {employee.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${employee.email}`} className="text-blue-600 hover:text-blue-800">
                          {employee.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${employee.phone}`} className="text-gray-700">
                          {employee.phone}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{employee.department}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-gray-900">
                        ${employee.salary.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900">{employee.leaves} days</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-900">
                      {new Date(employee.joinDate).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => handleDelete(employee.id, employee.name)}
                      className="inline-flex items-center justify-center w-8 h-8 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                      title="Delete Employee"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Summary Statistics */}
      {filteredEmployees.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Total Employees</span>
            </div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {filteredEmployees.length}
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Average Salary</span>
            </div>
            <div className="text-2xl font-bold text-green-900 mt-1">
              ${Math.round(filteredEmployees.reduce((sum, emp) => sum + emp.salary, 0) / filteredEmployees.length).toLocaleString()}
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Departments</span>
            </div>
            <div className="text-2xl font-bold text-purple-900 mt-1">
              {new Set(filteredEmployees.map(emp => emp.department)).size}
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">Avg Leave Days</span>
            </div>
            <div className="text-2xl font-bold text-amber-900 mt-1">
              {Math.round(filteredEmployees.reduce((sum, emp) => sum + emp.leaves, 0) / filteredEmployees.length)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;