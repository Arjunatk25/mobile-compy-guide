import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Syllabus from "./pages/Syllabus";
import Unit1 from "./pages/Unit1";
import Unit2 from "./pages/Unit2";
import Unit3 from "./pages/Unit3";
import Unit4 from "./pages/Unit4";
import Unit5 from "./pages/Unit5";
import Notes from "./pages/Notes";
import Extras from "./pages/Extras";
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
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/unit/1" element={<Unit1 />} />
          <Route path="/unit/2" element={<Unit2 />} />
          <Route path="/unit/3" element={<Unit3 />} />
          <Route path="/unit/4" element={<Unit4 />} />
          <Route path="/unit/5" element={<Unit5 />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/extras" element={<Extras />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
