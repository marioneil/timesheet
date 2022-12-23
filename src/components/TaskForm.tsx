import React, { PropsWithChildren } from "react";

const handleSubmit = (event: React.FormEvent) => {
  alert("A name was submitted: ");
  event.preventDefault();
};

const SectionTitle: React.FC<PropsWithChildren> = (props) => (
  <div className="text-xl border-dashed border-b my-5 border-green-400 ">
    {props.children}
  </div>
);

const FormField: React.FC<{ label: string; placeholder: string }> = ({
  label,
  placeholder,
}) => {
  ``;
  return (
    <div className="px-3 grow">
      <label className=" text-sm font-medium text-green-700">{label}</label>
      <div>
        <input
          type="text"
          id="fname"
          className=" w-full rounded py-1 pl-2 pr-12
              border-2 border-green-600
              hover:bg-green-300
              hover: placeholder:text-white
               "
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default function TaskForm() {
  const fName = "First Name";
  const lName = "Last Name";
  const email = "Email";

  return (
    <div className="m-3 p-3   border-4 bg-white dark:bg-slate-800 ">
      <SectionTitle>General</SectionTitle>
      <div className="flex flex-wrap justify-between px-3 ">
        {/* flex justify-between  px-3 */}
        <FormField label={fName} placeholder={fName} />
        <FormField label={lName} placeholder={lName} />
      </div>
      <SectionTitle>Details</SectionTitle>
      <div className="px-3">
        <FormField label={email} placeholder={email} />
      </div>
    </div>
  );
}
