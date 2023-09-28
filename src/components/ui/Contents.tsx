"use client";
import { Layout } from "antd";
import Header from "./Header";
import UmBreadCrumb from "./UmBreadCrumb";

const { Content } = Layout;
const base = "admin";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <UmBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "student",
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
