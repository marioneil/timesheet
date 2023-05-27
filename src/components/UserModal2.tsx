import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import React from "react";

interface UserModalProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
}

export const UserModal2: React.FC<UserModalProps> = ({
  showModal,
  setShowModal,
  id,
  email,
  role,
  isAdmin,
}) => {
  function disableRoleEditing() {
    console.log(`isAdmin ${isAdmin}`);

    if (isAdmin) return false;
    return true;
  }

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setShowModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
                  <div className="border-b-2">
                    <Dialog.Title
                      as="h3"
                      className="m-3 text-center text-lg font-medium leading-6 text-gray-900"
                    >
                      User Details
                    </Dialog.Title>
                  </div>
                  <div className="my-2 mx-auto w-72">
                    <div className="my-4">
                      <div className="">
                        <label
                          className="mb-1 block pr-4 font-bold text-gray-500"
                          // for="inline-full-name"
                        >
                          Email
                        </label>
                      </div>
                      <div className="">
                        <input
                          className="w-72 appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                          id="inline-full-name"
                          type="text"
                          disabled
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="my-4">
                      <div className="">
                        <label className="mb-1 block pr-4 font-bold text-gray-500 ">
                          Role
                        </label>
                      </div>
                      <div className="">
                        <select
                          className="h-9 w-72 border px-4"
                          value={role}
                          disabled={disableRoleEditing()}
                        >
                          <option value=""></option>
                          <option value="USER">USER</option>
                          <option value="ADMIN">ADMIN</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-end border-t-2 p-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
