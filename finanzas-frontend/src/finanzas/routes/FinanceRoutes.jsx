import { Navigate, Route, Routes } from "react-router-dom"
import { AccountPage, AnalysisPage, FinancePage, MovementsPage } from "../pages"

export const FinanceRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <FinancePage/> }/>
        <Route path="/movements" element={ <MovementsPage/> }/>
        <Route path="/analysis" element={ <AnalysisPage/> }/>
        <Route path="/account" element={ <AccountPage/> }/>


        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
