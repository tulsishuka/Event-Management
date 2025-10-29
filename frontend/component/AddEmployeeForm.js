
"use client";  
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const ADD_EMPLOYEE = gql`
  mutation AddEmployee($name: String!, $position: String!, $department: String!, $salary: Float!) {
    addEmployee(name: $name, position: $position, department: $department, salary: $salary) {
      id
      name
      position
      department
      salary
    }
  }
`;

const GET_EMPLOYEES = gql`
  query GetAllEmployees {
    getAllEmployees {
      id
      name
      position
      department
      salary
    }
  }
`;

export default function AddEmployeeForm() {
  const [form, setForm] = useState({ name: "", position: "", department: "", salary: "" });

  // useQuery to refetch employees after adding
  const { refetch } = useQuery(GET_EMPLOYEES);

  const [addEmployee, { loading, error }] = useMutation(ADD_EMPLOYEE, {
    onCompleted: async () => {
      await refetch(); // refetch employee list
      setForm({ name: "", position: "", department: "", salary: "" }); // reset form
    },
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee({ variables: { ...form, salary: parseFloat(form.salary) } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={handleChange}
        required
      />
      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />
      <input
        name="salary"
        placeholder="Salary"
        type="number"
        value={form.salary}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Employee"}
      </button>
      {error && <p style={{ color: "red" }}>Error adding employee</p>}
    </form>
  );
}
