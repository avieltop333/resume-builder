import { useState } from "react";

export default function Section({
  children,
  handleClick,
  className = " rounded-md shadow-md w-full flex justify-center transition-opacity duration-300 bg-slate-600",
  title,
  resume,
  updateResume,
  school,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) {
  const [showOptions, setShowOptions] = useState(false);

  const buttonClickHandler = (event) => {
    event.stopPropagation();
    setShowOptions((prev) => !prev);

    if (handleClick) {
      handleClick(event);
    }
  };
  const renderContent = {
    Education: resume.education.map((educ, index) => (
      <div className="flex justify-between col-span-2">
        <p>{educ.school}</p>
        <button
          className="bg-red-400 p-1 rounded-md text-black transition ease-in-out duration-300 hover:bg-amber-400"
          onClick={() => {
            // updates education for !thisIndex
            const updatedEducation = resume.education.filter(
              (educ, i) => i !== index
            );

            updateResume((prev) => ({ ...prev, education: updatedEducation }));
          }}
        >
          currentInput remove
        </button>
      </div>
    )),
    Career: resume.career.map((car, index) => {
      return (
        <div className="flex justify-between col-span-2">
          <p>{car.employer}</p>
          <button
            className="bg-red-400 p-1 rounded-md text-black transition ease-in-out duration-300 hover:bg-amber-400"
            onClick={() => {
              const updatedCareer = resume.career.filter(
                (car, i) => i !== index
              );
              updateResume((prev) => ({ ...prev, career: updatedCareer }));
            }}
          >
            Remove
          </button>
        </div>
      );
    }),
  };

  return (
    <div className={className}>
      {!showOptions ? (
        <div
          className="w-100 flex justify-center hover:bg-green-500 transition-colors duration-300 bg-slate-600 rounded-md"
          onClick={buttonClickHandler}
        >
          {title}
        </div>
      ) : (
        // when TRUE render the fucking shit

        <div className="grid grid-cols-2 gap-1 p-2 bg-slate-600 rounded-md">
          {renderContent[title]}
          {children}
          <button
            className={` p-1 rounded-md transition-opacity duration-300 col-span-2 bg-green-700 `}
            onClick={(event) => {
              event.stopPropagation();

              setShowOptions((prev) => !prev);

              title === "Education"
                ? updateResume((prev) => ({
                    ...prev,
                    education: [...prev.education, { school: school }],
                  }))
                : null;

              title === "General Information"
                ? updateResume((prev) => ({
                    ...prev,
                    firstName: firstName,
                    lastName: lastName,
                  }))
                : null;
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
