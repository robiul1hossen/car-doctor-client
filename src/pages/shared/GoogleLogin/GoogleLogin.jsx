import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="text-center">
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
        G
      </button>
    </div>
  );
};

export default GoogleLogin;
