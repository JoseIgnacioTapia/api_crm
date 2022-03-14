const Alerta = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold uppercase p-4">
      {children}
    </div>
  );
};

export default Alerta;
