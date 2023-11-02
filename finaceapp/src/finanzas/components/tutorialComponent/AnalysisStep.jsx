import { useNavigate } from "react-router-dom";
import { useUiStore } from "../../hooks";
import { useEffect } from "react";

export const AnalysisStep = () => {
  const { setTutorialStep } = useUiStore();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/analysis');
  }, [])

  const handleNextStep = () => {
    setTutorialStep('account')
  }

  const handlePreviousStep = () => {
    setTutorialStep('movement')
  }
  return (
    <div className="w-full h-full relative">
    <div className="absolute top-52 right-10 flex flex-col">
      <div className="bg-white rounded-lg shadow-lg w-96 p-3">
        <p>In the <strong>Analysis</strong> section you are going to be able to see the statistics of all your movements. You can also <strong>click</strong> the categories to apply filters.</p>
      </div>

      <div className="flex justify-end">
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
