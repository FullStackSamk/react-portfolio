import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-500 px-8 pt-4">
      <Link to="/" className="hover:underline text-indigo-600">Home</Link>
      {pathParts.map((part, index) => {
        const to = "/" + pathParts.slice(0, index + 1).join("/");
        return (
          <span key={to}>
            {" / "}
            <Link to={to} className="capitalize hover:underline text-indigo-600">
              {part.replace("-", " ")}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
