import { Navigate, Route, Routes } from "react-router-dom"
import { FinanzasPage } from "../pages/FinanzasPage"

export const FinanzasRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <FinanzasPage/> }/>

        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
