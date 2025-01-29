import { useState } from "react";

const FaqItem = ({ Title = "Title", Content = "Content" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="px-4 md:max-w-xl md:mx-auto lg:hidden">
      <div className="border-b border-black p-2">
        <button
          className="flex justify-between w-full bg-gray-100 p-2 font-medium text-blue-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-left">{Title}</span>
          <span>{!isOpen ? "+" : "-"}</span>
        </button>
        {isOpen && (
          <div className="flex justify-between w-full bg-gray-100 p-2 text-base">
            <span className="text-left">{Content}</span>
          </div>
        )}
      </div>
    </div>


    {/* large screen  */}
    <div className="mx-auto max-w-3xl hidden lg:block">
      <div className="border p-3">
        <button
          className="flex justify-between w-full bg-gray-100 p-2 text-lg font-medium text-blue-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-left">{Title}</span>
          <span>{!isOpen ? "+" : "-"}</span>
        </button>
        {isOpen && (
          <div className="flex justify-between w-full bg-gray-100 p-2">
            <span className="text-left text-base">{Content}</span>
          </div>
        )}
      </div>
    </div>
    </>
    
  );
};

export default FaqItem;
