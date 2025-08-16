export interface Employee {
  id: string;
  name: string;
  email: string;
  address: string;
  salary: number;
  leaves: number;
  department: string;
  joinDate: string;
  phone: string;
}

export interface EmployeeFormData {
  name: string;
  email: string;
  address: string;
  salary: string;
  leaves: string;
  department: string;
  joinDate: string;
  phone: string;
}