export const Btn = (props) => {
  return (
    <div className="bg-indigo-600 text-white font-[Proppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
      {props.children}
    </div>
  );
};
