import Logo from './../../../assets/icons/StarLogo.png';
import bg from '../../../assets/images/WhatsApp Image 2026-02-23 at 3.23.19 PM 1.png';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
export default function ForgotPasswordPage() {
  return(
      <div>


       <div
  className="bg-center bg-no-repeat h-screen bg-cover relative"
  style={{ backgroundImage: `url(${bg})`}}
>
  <div className="layout absolute top-0 start-0 bottom-0 end-0 bg-[#7441FF] bg-opacity-40 flex items-center justify-center text-center">
  <div className="icon absolute top-[2%] start-[5%]">
    <img
      src={Logo}
      className="rounded-full size-10"
      alt="Star Logo"
      />
  </div>


  <div className="bg-white p-4 rounded-md shadow opacity-90">
<h1 className="text-4xl text-[#7441FF] font-extrabold">
  New Password
</h1>
<ForgotPasswordForm/>
  </div>
      </div>
</div>
</div>
  );
}
