import passLogo from "./../../../assets/icons/Vector (1).png"
function ForgotPasswordForm() {
    const fakeLogin = () => {
    localStorage.setItem("token", "123");
    navigate(to, { replace: true });
  };
  return (
    <form className="w-[410px] mx-auto py-6 px-1">


      <div className="flex flex-col mb-4">
        <label htmlFor="pass" className="flex items-center text-[#7441FF] font-medium mb-1">
          <img src={passLogo} alt="Password Icon" className="size-5"/>
             Password
        </label>
        <input
          type="password"
          id="pass"
          name="password"
          className="text-white p-2 rounded-md outline-none focus:ring-0 bg-[#7441FF]"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="pass" className="flex items-center text-[#7441FF] font-medium mb-1">
          <img src={passLogo} alt="Password Icon" className="size-5"/>
             Confirm Password
        </label>
        <input
          type="password"
          id="pass"
          name="password"
          className="text-white p-2 rounded-md outline-none focus:ring-0 bg-[#7441FF]"
        />
      </div>
      <button
        type="submit"
        className="w-1/3 py-2 bg-[#7441FF] text-white font-semibold rounded-md"
      >
        Confirm
      </button>
    </form>
  );
}
export default ForgotPasswordForm;
