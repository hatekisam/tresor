import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface Props {
  dropHeader: string;
  dDownItems: object[];
}

const DropDown = ({ dropHeader, dDownItems }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="w-full flex flex-col border-2 border-[rgba(67, 67, 67, 0.03)] my-5 cursor-pointer rounded-lg"
    >
      <header
        onClick={() => setOpenDropdown(!openDropdown)}
        className="text-[12px] font-semibold pl-3 py-4 bg-[rgba(67, 67, 67, 0.03)] border-[rgba(67, 67, 67, 0.09)] border-b-2"
      >
        {dropHeader}
      </header>

      {openDropdown && (
        dDownItems.map((item: any, index: number) => (
          <Link
            key={index}
            href={item.to}
            className="text-[12px] font-semibold pl-3 py-4 bg-[rgba(67, 67, 67, 0.03)] border border-b text-[rgba(67, 67, 67, 0.03)]"
          >
            {item.name}
          </Link>
        ))
      )}
    </div>
  );
};

export default DropDown;
