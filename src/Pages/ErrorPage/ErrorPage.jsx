import err from '../../assets/404.gif'


const ErrorPage = () => {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <img src={err} alt="" />
    </div>
  );
};

export default ErrorPage;
