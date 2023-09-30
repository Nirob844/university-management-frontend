"use client";
import StepperFrom from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/studentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/studentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/studentForms/StudentBasicInfo";
import StudentInfo from "@/components/studentForms/StudentInfo";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>create student</h1>
      <StepperFrom
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudent;
