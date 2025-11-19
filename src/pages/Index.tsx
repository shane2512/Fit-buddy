import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Dashboard from "../components/app/Dashboard";
import PlanBuilder from "../components/app/PlanBuilder";
import ProgressCharts from "../components/app/ProgressCharts";
import Hyperspeed from "../components/visual/Hyperspeed";
import { hyperspeedPresets } from "../components/visual/hyperspeedPresets";
import MembersDashboard from "../components/app/MembersDashboard";
import BodyDiagram from "../components/visual/BodyDiagram";

const Index = () => {
  return (
    <div className="relative min-h-screen app-bg">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Hyperspeed effectOptions={hyperspeedPresets.one as any} />
      </div>
      <nav className="sticky top-0 z-10 nav-glass">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="font-bold text-xl text-gradient">Athelto</a>
          <div className="hidden sm:flex gap-6">
            <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">Dashboard</a>
            <a href="#plan" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">Plan</a>
            <a href="#progress" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">Progress</a>
          </div>
        </div>
      </nav>
      <Tabs defaultValue="dashboard" className="container mx-auto py-6 px-4">
        <TabsList className="glass mb-8 p-1">
          <TabsTrigger value="dashboard" className="transition-all duration-300">Dashboard</TabsTrigger>
          <TabsTrigger value="plan" className="transition-all duration-300">Plan</TabsTrigger>
          <TabsTrigger value="progress" className="transition-all duration-300">Progress</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard" id="dashboard"><div className="space-y-6"><MembersDashboard /><BodyDiagram /><Dashboard /></div></TabsContent>
        <TabsContent value="plan"><PlanBuilder /></TabsContent>
        <TabsContent value="progress" id="progress"><ProgressCharts /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
