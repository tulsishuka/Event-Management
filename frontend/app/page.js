"use client";

import { useState } from "react";
import { gql } from "@apollo/client"; 
import { useQuery } from "@apollo/client/react"; 
import DepartmentFilter from "@/component/DepartmentFilter";
import EmployeeTable from "@/component/EmployeeTable";
import AddEmployeeForm from "@/component/AddEmployeeForm";


const GET_EMPLOYEES = gql`
  query GetAllEmployees {
    getAllEmployees {
      id
      name
      position
      department
    }
  }
`;

export default function HomePage() {

    const { data, loading, error, refetch } = useQuery(GET_EMPLOYEES);


  const [selectedDept, setSelectedDept] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredEmployees = data.getAllEmployees.filter(emp =>
    selectedDept ? emp.department === selectedDept : true
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-6xl font-bold mb-4 bg-red-900">Employee Directory</h1>

     

<DepartmentFilter
        departments={[...new Set(data.getAllEmployees.map(emp => emp.department))]}
        onSelect={setSelectedDept}
      />
      <div className="my-4">
        <EmployeeTable employees={filteredEmployees} />
      </div>
     

      <h2 className="text-xl font-semibold mb-2">Add New Employee</h2>
     {/* <AddEmployeeForm onEmployeeAdded={(newEmp) => data.getAllEmployees.push(newEmp)} /> */}
<AddEmployeeForm onEmployeeAdded={() => refetch()} />

    </div>
  );
}
// "use client";
// import { useState } from "react";
// import AddEmployeeForm from "../component/AddEmployeeForm";
// import EmployeeList from "../component/EmployeeList";
// import SearchBar from "../component/SearchBar";

// export default function HomePage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [reload, setReload] = useState(false);

//   const handleEmployeeAdded = () => setReload(!reload);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Employee Directory</h1>
//       <SearchBar query={searchQuery} onSearch={setSearchQuery} />
//       <AddEmployeeForm onEmployeeAdded={handleEmployeeAdded} />
//       <EmployeeList searchQuery={searchQuery} key={reload} />
//     </div>
//   );
// }
