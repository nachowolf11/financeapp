import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUiStore } from "../../hooks";
import { useAuthStore } from "../../../auth/hooks";

export const AccountStep = () => {

  const navigate = useNavigate();
  const { setTutorialStep } = useUiStore();
  const { startUpdateUser } = useAuthStore();

  useEffect(() => {
    navigate('/account');
  }, [])

  const handleEndTutorial = () => {
    startUpdateUser({first_login:true});
  }

  const handlePreviousStep = () => {
    setTutorialStep('analysis')
  }
  
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-72 left-10 xl:left-64 flex flex-col">
        <div className="bg-white rounded-lg shadow-lg w-96 p-3">
          <p>In the <strong>Account</strong> section you can update your profile information.</p>
        </div>
        <div className="flex justify-start">
          <button
            className="mt-4 mr-3 px-4 py-2 self-end rounded-md bg-violet-700 text-white font-bold"
            onClick={handlePreviousStep}
          >
            Previous
          </button>
          <button
            className="mt-4 px-4 py-2 self-end rounded-md bg-violet-700 text-white font-bold"
            onClick={handleEndTutorial}
          >
            Try it!
          </button>
        </div>
      </div>
    </div>
  )
}
