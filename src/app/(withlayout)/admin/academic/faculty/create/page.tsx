"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UmBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

const CreateAcFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating ................");
    try {
      const res = addAcademicFaculty(data);
      if (!!res) {
        message.success("academic faculty added successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UmBreadCrumb
        items={[
          { label: `${role}`, link: `/${role}` },
          { label: "academic/faculty", link: `/${role}/academic/faculty` },
        ]}
      />
      <h1>Create Academic Faculty</h1>
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

export default CreateAcFacultyPage;
