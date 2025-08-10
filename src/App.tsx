import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import WorkTerm1 from "./pages/WorkTerm1";
import WorkTerm2 from "./pages/WorkTerm2";
import WorkTerm3 from "./pages/WorkTerm3";
import NotFound from "./pages/NotFound";
import ScrollToHash from './components/ScrollToHash';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/work-term-1" element={<WorkTerm1 />} />
        <Route path="/work-term-2" element={<WorkTerm2 />} />
        <Route path="/work-term-3" element={<WorkTerm3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
