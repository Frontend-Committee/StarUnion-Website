import { Button } from "./../ui/button.jsx";

function NotFoundPage (){
    return (
   <div className="flex items-center justify-center h-screen text-white overflow-hidden" style={{"background-image": "radial-gradient(circle at 50% 35%, rgba(77, 51, 152, 0.35) 0%, rgba(77, 51, 152, 0) 60%), linear-gradient(rgb(30, 26, 43) 0%, rgb(36, 19, 82) 45%, rgb(77, 51, 152) 100%)"}}>
      

      <div className="text-center px-4">
        
        <h1 className="text-[120px] font-bold leading-none animate-bounce">
          404
        </h1>

        <h2 className="text-yellow-400 tracking-widest text-xl mt-2">
          PAGE NOT FOUND
        </h2>

        <p className="text-xl mt-4 leading-loose">
          Sorry, the page you're looking for doesn't exist or may have been moved. please check the url. <br />
        </p>

        <Button
          onClick={() => (window.location.href = "/")}
          className={"text-lg h-12 my-5 bg-[#452798] text-white hover:bg-[#683CE3] active:scale-[0.98] transition-all font-bold rounded-xl shadow-lg shadow-[#452798]/20"}
        >
          GO BACK HOME
        </Button>
      </div>
    </div>
  );

}
export default NotFoundPage;