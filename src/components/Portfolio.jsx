import jobfinder from "../assets/jobfinder.png";
import hotel from "../assets/hotel.png";
import crop from "../assets/crop.png";


const Portfolio = () => {
  const items = [
    {
      id: 1,
      logo: jobfinder,
      name: "Online Job Portal",
      p: "Developed a comprehensive Job Finder Portal using Python, Django, HTML, CSS, and JavaScript to streamline the job search process for users. Implemented efficient database management and user-friendly interfaces to enhance user experience and application success rates.",
    },
    {
      id: 2,
      logo: crop,
      name: "Crop recommended system using (ML)",
      p: "Developed a Crop Recommendation System using machine learning algorithms to analyze environmental data and suggest optimal crops. Implemented the solution with Python and Flask, enhancing agricultural planning accuracy and efficiency.",
    },
    {
      id: 3,
      logo: hotel,
      name: "Hotel management system using python tinker and sql",
      p: "Engineered a Hotel Management System using Python Tkinter and SQL to streamline operations such as bookings, check-ins, and check-outs. Improved operational efficiency and customer service through an intuitive interface and robust backend management.",
    },
  ];

  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-2"
      >
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5   ">
          {items.map(({ id, logo, name, p }) => (
            <div
              key={id}
              className="md:w-[400px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-300 my-5 "
            >
              <img
                src={logo}
                alt=""
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              />
              <div>
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="justify-items-center my-4">
                  <p className="text-slate-500 text-[14px] text-justify">{p}</p>

                  <div className="justify-around px-4 py-2 space-x-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Video
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
