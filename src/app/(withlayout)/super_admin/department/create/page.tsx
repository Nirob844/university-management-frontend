"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";

const CreateDepartmentPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UmBreadCrumb
        items={[
          { label: `${role}`, link: `/${role}` },
          { label: "department", link: `/${role}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
