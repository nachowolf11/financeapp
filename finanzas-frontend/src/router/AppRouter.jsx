import { useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { LoadingPage } from "../../ui"
import { useAuthStore } from "../auth/hooks"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FinanceRoutes } from "../finanzas/index"

export const AppRouter = () => {

  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])
  

  if( status === 'checking' ){
    return (
      <LoadingPage/>
    )
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <FinanceRoutes/> } />
        : <Route path="/auth/*" element={ <AuthRoutes/> }/>
      }

      <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
