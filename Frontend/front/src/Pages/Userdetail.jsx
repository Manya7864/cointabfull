import {
  Heading,
  Select,
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Userdetail = () => {
  const [data, setData] = useState([]);
  const [sortbyage, setSortbyage] = useState("");
  const getdata = () => {
    fetch("https://back-production-6fdf.up.railway.app/user/getdata")
      .then((res) => res.json())
      .then((data1) => setData(data1));
  };
  console.log(data);

  useEffect(() => {
    getdata();
  }, []);

  const handlechange = (e) => {
    setSortbyage(e.target.value);
    if (sortbyage === "asc") {
      var sortedage = data.sort((a, b) => b.dob.age - a.dob.age);
    } else {
      var sortedage = data.sort((a, b) => a.dob.age - b.dob.age);
    }
    setData(sortedage);
  };
  const handlefilter=(event)=>{
    axios.get(`https://back-production-6fdf.up.railway.app/user/getdata/${event.target.value}`).then((res)=>{
      console.log(res.data)
      setData(res.data)
  })

  }
  return (
    <div>
      <Heading>User Deatil Page</Heading>
      <select onChange={handlechange}>
        <option value="" selected="true">
          Sort By Age
        </option>
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
      </select>

      <select onChange={handlefilter}>
      <option value="" selected="true">
        Select Gender
      </option>
      <option value="male">Male</option>
      <option value="Female">Female</option>
    </select>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>GENDER</Th>
              <Th>EMAIL</Th>
              <Th>PHONE</Th>
              <Th>NAME</Th>
              <Th>age</Th>
            </Tr>
          </Thead>

          {data.map((el, index) => {
            return (
              <>
                <Tr key={index}>
                  <Td>{el.gender}</Td>
                  <Td>{el.email}</Td>
                  <Td>{el.phone}</Td>
                  <Td>{el.name.first}</Td>
                  <Td>{el.dob.age}</Td>
                </Tr>
              </>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Userdetail;
