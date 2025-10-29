/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";


const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID!) {
    getEmployeeDetails(id: $id) {
      id
      name
      position
      department
      salary
    }
  }
`;

export default function EmployeeDetail() {
  const { id } = useParams();
    const router = useRouter();
  console.log("Employee ID:", id);

  if (!id) return <p>No employee ID provided.</p>;

  const { loading, error, data } = useQuery(GET_EMPLOYEE, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error loading employee: {error.message}</p>;
  }

  const emp = data.getEmployeeDetails;
  if (!emp) return <p>Employee not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{emp.name}</h2>
      <p><strong>Position:</strong> {emp.position}</p>
      <p><strong>Department:</strong> {emp.department}</p>
      <p><strong>Salary:</strong> ${emp.salary}</p>
            <button
        style={{ marginTop: "20px", padding: "8px 16px", cursor: "pointer" }}
        onClick={() => router.push("/")} // navigate to home page
      >
        Back to Home
      </button>

    </div>
  );
}
