import { ThemeProvider } from "@/components/theme-provider"
import CreateRoom from "./pages/CreateRoom"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CreateRoom/>
    </ThemeProvider>
  )
}

export default App
