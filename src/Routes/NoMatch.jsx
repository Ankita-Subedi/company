const NoMatch = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NoMatch;
