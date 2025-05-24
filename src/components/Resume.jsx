export default function Resume({ resume, updateResume }) {
  return (
    <div className="flex flex-col w-full justify-around items-center text-xs">
      <div className="flex gap-1 text-slate-50 justify-around w-full bg-blue-950 h-4/12 items-center font-bold mt-3 p-2">
        <p>Name: {resume.firstName + " " + resume.lastName}</p>
        <p>Number: {resume.phone}</p>
      </div>
      <div className="w-6/12  border border-b-cyan-950 "></div>
      <div className="text-black w-full p-2 ">
        <p className="font-bold border-t-amber-200 bg-cyan-600 text-blue-50 p-1 text-center">
          Education
        </p>
        {resume.education.map((educ) => (
          <div className="flex w-full justify-between p-1">
            <p>{educ.school}</p>
            <p>
              {educ.startDate} - {educ.endDate}
            </p>
          </div>
        ))}
        <p className="font-bold border-t-amber-200 bg-cyan-600 text-blue-50 p-1 text-center">
          Work Experience
        </p>
        <div className="grid gap-2">
          {resume.career.map((car) => (
            <div className="grid grid-cols-2 griw-rows-3 gap-0.5">
              <p>{car.employer}</p>
              <p className="justify-self-end">
                {car.startDate} - {car.endDate}
              </p>
              <p className="italic col-span-2">{car.title}</p>

              <p className="col-span-2">{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
