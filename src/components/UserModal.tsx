import React from "react";

interface UserModalProps {
  setShowModal: (flag: boolean) => void;
  id: string;
  email: string;
  role: string;
}

export const UserModal: React.FC<UserModalProps> = ({
  setShowModal,
  id,
  email,
  role,
}) => {
  return (
    <div
      // tabIndex={-1}
      // aria-hidden="true"
      // className="top-30 left-30 fixed right-0 z-50  h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden  p-4 md:inset-0"
      className="top-30 left-30 fixed inset-20 right-0  overflow-y-auto overflow-x-hidden p-4"
      //  className="flex  justify-center p-4"
    >
      <div className="relative max-h-full w-full max-w-sm  border-2 border-red-600">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit User
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
              onClick={() => setShowModal(false)}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              ID: {id}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              EMAIL: {email}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              ROLE:{role}
            </p>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    //  </div>
  );
};
