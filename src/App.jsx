import "./App.css";
import Section from "./components/Section";
import Card from "./components/Card";
import Input from "./components/Input";
import Resume from "./components/Resume";
import { useState } from "react";
import resumeTemplate from "./components/resumeData";
function App() {
  const [resume, updateResume] = useState(resumeTemplate);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [school, setSchool] = useState("");

  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  return (
    <div className="cont flex align-middle h-screen w-screen text-amber-50 gap-2">
      <Card>
        <p className="flex justify-center">
          Hello! Let's get your resume done up.
        </p>

        <Section
          title="General Information"
          gridColSpan="3"
          resume={resume}
          updateResume={updateResume}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        >
          <Input
            input="firstName"
            type="text"
            inputData={firstName}
            setInputData={setFirstName}
            onChange={(e) => {
              let newFirstName = e.target.value;
              console.log(newFirstName);
              setFirstName(newFirstName);
            }}
          >
            First Name:
          </Input>
          <Input
            input="lastName"
            type="text"
            onChange={(e) => {
              let newLastName = e.target.value;
              setLastName(newLastName);
            }}
          >
            Last Name:
          </Input>
          <Input input="lastName" type="text">
            Phone:
          </Input>
        </Section>

        <Section
          title="Education"
          resume={resume}
          updateResume={updateResume}
          school={school}
          setSchool={setSchool}
        >
          <Input
            input="school"
            type="text"
            resume={resume}
            updateResume={updateResume}
            onChange={(e) => {
              setSchool(e.target.value);
              console.log(school);
              // updateResume((prev) => ({
              //   ...prev,
              //   education: [...prev.education, { school: e.target.value }],
              // }));
              // console.log(resume);
            }}
          >
            School:
          </Input>
          <Input input="startDateSchool" type="date">
            Start Date
          </Input>
          <Input input="endDateSchool" type="date">
            Start Date
          </Input>
        </Section>
        <Section title="Career" resume={resume} updateResume={updateResume}>
          <Input input="employer" type="text">
            Employer:
          </Input>
          <Input input="startDate" type="date">
            Start Date:
          </Input>
          <Input input="endDate" type="date">
            End Date:
          </Input>
          <Input input="description" textArea={true}>
            Description
          </Input>
        </Section>
      </Card>
      <Card className="card flex  shadow-md flex-col items-center gap-1 w-1/2 border-black border m-8">
        <Resume resume={resume} updateResume={updateResume} />
      </Card>
    </div>
  );
}

export default App;
