import LottieAnimation from "./LottieAnimation";

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center mt-40">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            We are making Stunning Websites
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            nine4 is a free to use website template for websites made with
            Next.js and styled with Tailwind CSS
          </p>
          <div className="flex justify-center">
            <div>
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-green-700 mr-5"
                href="https://check-your-heart-web.streamlit.app/"
                target="_blank"
              >
                <span className="justify-center">Heart Diagnosis</span>
              </a>
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-green-700"
                href="https://check-your-diabetes.streamlit.app/"
                target="_blank"
              >
                <span className="justify-center">Diabetes Diagnosis</span>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
}
