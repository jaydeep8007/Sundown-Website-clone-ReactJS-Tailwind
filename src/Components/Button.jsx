// eslint-disable-next-line react/prop-types
const Button = ({ tag, width }) => {
  return (
    <main className="group">
      <button
        className={`h-10 ${width} rounded-3xl  border border-gray-400 relative overflow-hidden hover:text-white`}
      >
        <span className="relative z-10">{tag}</span>
        <span
          className={`bg-black rounded-full h-10 ${width} absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
        ></span>
      </button>
    </main>
  );
};

export default Button;
