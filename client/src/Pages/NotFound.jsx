import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-medium mt-4 text-gray-600">Page Not Found</p>
        <p className="text-lg mt-2 text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            <FaHome className="mr-2" /> Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
