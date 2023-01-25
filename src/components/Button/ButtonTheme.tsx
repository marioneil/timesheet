const ButtonType: { [key: string]: string } = {
  Schedule: "rounded-md px-3 py-1 m-3 mr-3 bg-blue-500 text-white grow",
  Approval: "rounded-md border px-3 py-1 m-3 ",
  Save: "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-6",
};

export function getClass(key: string): string {
  const twClassName = ButtonType[key];
  if (typeof twClassName === "undefined") {
    return "";
  } else {
    return twClassName;
  }
}

// export function getClass doesnt work??
