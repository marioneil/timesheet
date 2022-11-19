function Header() {
    return <div className="flex justify-between p-2">
        <div className="text-white bg-black px-2 py-1">M</div>
        <div className="flex gap-4 ">
            <button className="border-b-2 border-black pl-2">About</button>
            <button>Portfolio</button>
            <button>Contacts</button>
        </div>
    </div>;
  }

  export {Header};
  