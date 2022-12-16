import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/reset.css";
import "./displayPets.css";
import { Table } from "antd";

export const DisplayPets: FC = () => {
  const [pets, setPets] = useState([]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Species",
      dataIndex: "species",
      key: "species",
    },
  ];
  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/pets");
      setPets(result?.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPets(pets);
    console.log("pets", pets);
  }, [pets]);

  return (
    <Table
      dataSource={pets}
      columns={columns}
      pagination={false}
      className="pets_list"
    />
  );
};
