import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import UCalgaryEvents from "./pages/events/UCalgaryEvents";
import MRUEvents from "./pages/events/MRUEvents";
import Resources from "./pages/Resources";
import Join from "./pages/Join";
// import Statements from "./pages/Statements";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/ucalgary" element={<UCalgaryEvents />} />
          <Route path="/events/mru" element={<MRUEvents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/join" element={<Join />} />
          {/* <Route path="/statements" element={<Statements />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
