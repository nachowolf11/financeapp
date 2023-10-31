import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUiStore } from "../../hooks";

export const MovementStep = () => {
  const navigate = useNavigate();
  const { setTutorialStep } = useUiStore();

  useEffect(() => {
    navigate('/movements');
  }, [])

  const handleNextStep = () => {
    setTutorialStep('analysis')
  }

  const handlePreviousStep = () => {
    setTutorialStep('account')
  }

  return (
    <div className="w-full h-full relative">
    <div className="absolute top-52 left-72 flex flex-col">
      <div className="bg-white rounded-lg shadow-lg w-96 p-3">
        <p>In the <strong>Movements</strong> section you can <strong>register</strong> your incomes and expenses, giving them a category and others characteristics. Furthermore you will be able to <strong>edit</strong> and <strong>remove</strong> them as you need.</p>
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
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>

    </div>
  </div>
  )
}
