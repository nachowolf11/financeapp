import { AccountStep } from "./AccountStep"
import { AnalysisStep } from "./AnalysisStep";
import { MovementStep } from "./MovementStep";
import { useUiStore } from "../../hooks";


export const TutorialComponent = () => {

  const { tutorialStep } = useUiStore();

  const getStep = (step) => {
    switch (step){
      case 'account':
        return <AccountStep/>

      case 'analysis':
        return <AnalysisStep/>

      case 'movement':
        return <MovementStep/>
      default:
        return <AccountStep/>
    }
  }

  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-slate-950 bg-opacity-10">
      {getStep(tutorialStep)}
    </div>
  )
}
