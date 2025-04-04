import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispach = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });    
  }

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispach(toggleGptSearchView());
  }


  return (
    <div className="fixed top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black  z-50 flex justify-between" >
      
      <img className="w-46" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="logo" />

      { user && (
        <div className="flex p-4">
          <button className="flex p-2 bg-purple-800 text-white rounded mx-4 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img 
            className="w-12 h-12 "
            src="https://images.pexels.com/photos/31379292/pexels-photo-31379292/free-photo-of-serene-foggy-landscape-with-wildflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="SignOut" 
          />
        <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">(SignOut)</button>
       </div>
        )
      }
    </div>
  )
}

export default Header;
