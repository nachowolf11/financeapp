import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUiStore } from "../../hooks";

export const AccountStep = () => {

  const navigate = useNavigate();
  const { setTutorialStep } = useUiStore();

  useEffect(() => {
    navigate('/account');
  }, [])

  const handleNextStep = () => {
    setTutorialStep('movement')
  }
  
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-32 right-10 flex flex-col">
        <div className="bg-white rounded-lg shadow-lg w-96 p-3">
          <p>In the <strong>Account</strong> section you can update your profile information.</p>
        </div>
        <button
          className="mt-4 px-4 py-2 self-end rounded-md bg-violet-700 text-white font-bold"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  )
}
