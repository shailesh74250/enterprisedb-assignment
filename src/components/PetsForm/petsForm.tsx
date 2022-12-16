import React, { FC } from "react";
import axios from "axios";
import { Form, Input, message } from "antd";
import { CustomButton } from "../CustomButton";
import "./petsForm.css";

export const PetsForm: FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Inserted successfully!",
    });
    form.resetFields();
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong!",
    });
  };
  const createPets = async (payload: any) => {
    try {
      const result = await axios.post("http://localhost:3000/pets", payload);
      console.log("result", result);
      success();
    } catch (err) {
      console.error(err);
      error();
    }
  };

  const onFinish = (values: any): void => {
    const payload = {
      name: values.petName,
      species: values.speciesName,
    };
    createPets(payload);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <div className="user_details_section">
        <h3>
          <b>Enter Pets</b>
        </h3>
        <Form
          form={form}
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Pet name"
            name="petName"
            rules={[{ required: true, message: "Please input pet name!" }]}
          >
            <Input placeholder="Pet" />
          </Form.Item>
          <Form.Item
            label="Species"
            name="speciesName"
            rules={[{ required: true, message: "Please input species!" }]}
          >
            <Input placeholder="Species" />
          </Form.Item>
          <Form.Item>
            <CustomButton
              type="primary"
              shape="round"
              outline=""
              htmlType="submit"
            >
              Add pets
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
