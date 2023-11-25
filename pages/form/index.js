import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { schema } from "@/lib/schemas";
import { useRouter } from "next/router";

const Practice = () => {
  const [section, setSection] = useState(1);
    const [visitorData, setVisitorData] = useState();
    const router = useRouter();


  const handleContinue = () => {
    setSection(section + 1);
  };

  const handleBack = () => {
    setSection(section - 1);
  };
  


  const initialValues = {
    name: "",
    email: "",
    date: "",
    country: "",
    school: "",
    degree: "",
    graduate: "",
    fyp: "",
    profession: "",
    company: "",
    skill: "",
    experience: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit: (values, action) => {
        console.log(values); // You can do anything with your form data here

        action.resetForm({
          values: initialValues, // Resetting form values to initial state
        });
        setSection(1); // Reset the section to the first one after successful submission
      },
    });
  return (
    <div>
      {section === 1 && (
        <div className="block">
          <section className="min-h-screen relative flex flex-col   ">
          {/* <button onClick={handleBack}>BACK</button> */}
            <div className="bg-gray-100 p-4">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Date of Birth</label>
                <input
                  type="date"
                    name="date"
                  value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Country</label>
                <input
                  type="text"
                    name="country"
                  value={values.country}

                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <button
                onClick={handleContinue}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </section>
        </div>
      )}
      {section === 2 && (
        <div className="block">
          <section className="min-h-screen relative flex flex-col  ">
             <button onClick={handleBack}>BACK</button>
             <div className="bg-gray-100 p-4">
              <h2 className="text-xl font-bold mb-4">Education Information</h2>
              <div className="mb-4">
                <label className="block mb-1">School Name</label>
                <input
                  type="text"
                    name="school"
                  value={values.school}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Degree</label>
                <input
                  type="text"
                    name="degree"
                  value={values.degree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Graduation Date</label>
                <input
                  type="date"
                    name="graduate"
                  value={values.graduate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">FYP Project</label>
                <input
                  type="text"
                    name="fyp"
                    value={values.fyp}
                    onChange={handleChange}
                    onBlur={handleBlur}

                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <button
                onClick={handleContinue}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </section>
        </div>
      )}
      {section === 3 && (
        <div className="block">
          <section className="min-h-screen relative flex flex-col  ">
             <button onClick={handleBack}>BACK</button>
             <div className="bg-gray-100 p-4">
              <h2 className="text-xl font-bold mb-4">Experience Information</h2>
              <div className="mb-4">
                <label className="block mb-1">Profession</label>
                <input
                  type="text"
                    name="profession"
                  value={values.profession}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Company</label>
                <input
                  type="email"
                  name="company"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}

                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Skill</label>
                <input
                  type="text"
                    name="skill"
                    value={values.skill}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Experience of years</label>
                <input
                  type="text"
                  name="experience"
                    value={values.experience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="border rounded-md py-1 px-2 w-full"
                />
              </div>
              <button
              type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit

              </button>
            </div>
          </section>
        </div>
      )}
      
    </div>
  );
};

export default Practice;
