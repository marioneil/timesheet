import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { json } from "react-router-dom";
import { auth } from "../firebase";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { UserModal2 } from "../components/UserModal2";

export const Users = () => {
  const [user] = useAuthState(auth);

  const [appUsers, setAppUsers] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentEditedUser, setcurrentEditedUser] = useState<{
    id: string;
    email: string;
    role: string;
  }>({ id: "", email: "", role: "" });

  const fetchUsers = async () => {
    console.log("user 0 - " + user);
    if (!user) return;

    console.log("user - " + user);
    const token = (await user.getIdToken()) || "";
    const result = await fetch("http://localhost:5000/users", {
      headers: { token: token },
    });
    const data = await result.json();
    setAppUsers(data);
    console.log(data);
  };

  useEffect(() => {
    console.log("in Home useEffect");
    fetchUsers();
  }, []);

  return (
    <>
      <div className="flex  justify-center p-4">
        <table className="table-auto border-2 ">
          <thead>
            <tr className="border-b-2  ">
              <th className="w-40 border-r-2 py-3 px-2 text-left ">ID</th>
              <th className="w-40 border-r-2 py-3 px-2 text-left">Email </th>
              <th className="w-20 border-r-2 py-3 px-2 text-left">Role </th>
              <th className="w-20 py-3 px-2 text-left">Action </th>
            </tr>
          </thead>
          <tbody>
            {appUsers.map((x, index) => {
              let bgColour = "";
              if (index % 2 == 0) bgColour = "bg-gray-100";

              return (
                <tr className={bgColour}>
                  <td className="border-r-2 py-3 px-2 text-left">{x.id}</td>
                  <td className="border-r-2 py-3 px-2 text-left">{x.email}</td>
                  <td className="border-r-2 py-3 px-2 text-left">{x.role}</td>
                  <td className="py-3 px-2 text-left">
                    <div className="flex gap-1">
                      <div className="">
                        <AiFillDelete />
                      </div>
                      <div className="">
                        <BiEdit
                          onClick={() => {
                            setcurrentEditedUser(x);
                            setShowModal(true);
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div className="p-3">test</div> */}
      </div>
      {showModal && (
        <UserModal2
          showModal={showModal}
          setShowModal={setShowModal}
          id={currentEditedUser.id}
          email={currentEditedUser.email}
          role={currentEditedUser.role}
        />
      )}
    </>
  );
};
