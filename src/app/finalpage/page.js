const finalpage = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center mt-8 mb-8">
      <div className="flex w-full h-full max-w-7xl">
        {/* Left Section (Centering content) */}
        <div className="bg-white p-12 rounded-lg w-1/2 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
            You’re Ready to Roll! 🎉
          </h1>
          <p className="text-lg text-center text-gray-600 mb-6">
            Welcome to <span className="text-blue-500">Drew’s</span> world.
          </p>
          <p className="text-center text-gray-600">
            Thanks for submitting your details! Your personalized quote is on
            the way.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src="/images/Picture5.jpg"
            alt="Drew Image"
            className="h-4/5 w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default finalpage;
