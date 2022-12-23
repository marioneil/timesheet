import { PropsWithChildren, useState } from "react";
import reactLogo from "./assets/react.svg";

const SectionTitle: React.FC<PropsWithChildren> = ({ children }) => (
  <h2 className="px-2 text-xl pb-3 uppercase my-5 text-green-400 border-b border-dashed border-green-400">
    {children}
  </h2>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-32">
      <section>
        <SectionTitle>General</SectionTitle>
        <div className="flex gap-5 justify-between px-2">
          <div>
            <label className="block text-green-600">First Name</label>
            <input
              className="block w-56 p-1 border border-green-600 hover:bg-green-300 focus-visible:bg-green-300"
              type="text"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-green-600">Last Name</label>
            <input
              className="block w-56 p-1 border border-green-600 hover:bg-green-300 focus-visible:bg-green-300"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="pt-3 px-2">
          <label className="block text-green-600">Email</label>
          <input
            className="block w-full p-1 border border-green-600 hover:bg-green-300 focus-visible:bg-green-300"
            type="text"
            placeholder="Email"
          />
        </div>
      </section>
      <section>
        <SectionTitle>Details</SectionTitle>

        <div className="pt-3 px-2">
          <label className="block text-green-600">Email</label>
          <input
            className="block w-full p-1 border border-green-600 hover:bg-green-300 focus-visible:bg-green-300"
            type="text"
            placeholder="Email"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
