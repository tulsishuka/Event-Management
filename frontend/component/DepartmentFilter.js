"use client";
export default function DepartmentFilter({ departments, onSelect }) {
  return (
    <select
      className="border p-2 rounded"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">All Departments</option>
      {departments.map((dept) => (
        <option key={dept} value={dept}>{dept}</option>
      ))}
    </select>
  );
}
