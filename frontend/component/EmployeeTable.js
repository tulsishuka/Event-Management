
"use client";

import { useRouter } from "next/navigation";

export default function EmployeeTable({ employees }) {
  const router = useRouter();

  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="border px-2 py-1">Name</th>
          <th className="border px-2 py-1">Position</th>
        </tr>
      </thead>

      
      
      <tbody>
        {employees.map((emp) => (
          <tr
            key={emp.id}
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => router.push(`/employee/${emp.id}`)} 
          >
            <td className="border px-2 py-1">{emp.name}</td>
            <td className="border px-2 py-1">{emp.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

