import { Route, Routes, Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FinanzasRoutes } from "../finanzas/index"

export const AppRouter = () => {

    const status = 'not-authenticated'

  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <FinanzasRoutes/> } />
        : <Route path="/auth/*" element={ <AuthRoutes/> }/>
      }

      <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
