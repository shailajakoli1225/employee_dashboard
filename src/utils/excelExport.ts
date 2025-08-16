import * as XLSX from 'xlsx';
import { Employee } from '../types/Employee';

export const exportToExcel = (employees: Employee[], filename: string = 'EmployeeData.xlsx') => {
  if (employees.length === 0) {
    alert('No employee data to export');
    return;
  }

  // Format data for Excel
  const excelData = employees.map((employee, index) => ({
    'S.No': index + 1,
    'Employee ID': employee.id,
    'Full Name': employee.name,
    'Email Address': employee.email,
    'Phone Number': employee.phone,
    'Address': employee.address,
    'Department': employee.department,
    'Join Date': new Date(employee.joinDate).toLocaleDateString(),
    'Annual Salary ($)': employee.salary.toLocaleString(),
    'Leave Days': employee.leaves,
  }));

  // Create workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Set column widths
  const columnWidths = [
    { wch: 8 },   // S.No
    { wch: 15 },  // Employee ID
    { wch: 20 },  // Full Name
    { wch: 25 },  // Email Address
    { wch: 15 },  // Phone Number
    { wch: 30 },  // Address
    { wch: 15 },  // Department
    { wch: 12 },  // Join Date
    { wch: 18 },  // Annual Salary
    { wch: 12 },  // Leave Days
  ];
  worksheet['!cols'] = columnWidths;

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Employee Data');

  // Export file
  XLSX.writeFile(workbook, filename);
};