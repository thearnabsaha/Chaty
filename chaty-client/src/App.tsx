import { ThemeProvider } from "@/components/theme-provider"
import CreateRoom from "./pages/CreateRoom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Room from "./pages/Room";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CreateRoom/>} />
            <Route path="room/:id" element={<Room />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
