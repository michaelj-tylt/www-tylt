'use client';
import { PageLayout } from '@/shared/page-layout';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { Hero } from '@/shared/hero-landing';
// import { DemoRequestContent } from '@/shared/demo-request';
import { FaWindows, FaApple } from 'react-icons/fa';
import { SiLinux } from 'react-icons/si';
import theme from '@/shared/themes/tylt';

export default function HomePage() {
  return (
    <PageLayout 
      homeUrl="/"
      auroraColors={["#5227FF", "#1E40AF", "#0F172A"]}
      pixelColors="#5227FF,#3B82F6,#1E3A8A"
      theme={theme}
      headerChildren={
        <>
          <a
            href={process.env.NEXT_PUBLIC_SIDEKICK_URL}
            className={`text-white ${theme.classes.primaryHover} transition-colors duration-200 relative text-base`}
          >
            <span className="relative">Sidekick</span>
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WEBTESTER_URL}
            className={`text-white ${theme.classes.primaryHover} transition-colors duration-200 relative text-base`}
          >
            <span className="relative">WebTester</span>
          </a>
          <a
            href={process.env.NEXT_PUBLIC_AUTOTESTER_URL}
            className={`text-white ${theme.classes.primaryHover} transition-colors duration-200 relative text-base`}
          >
            <span className="relative">AutoTester</span>
          </a>
        </>
      }
    >
        {/* Page 1: Hero */}
        <div 
          className="min-h-screen w-full flex items-center justify-center relative text-white snap-start"
        >
          <Section isHero={true}>
            <div className="text-center space-y-16">
              {/* Main hero content */}
              <div className="space-y-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    AI agents
                  </span>
                  <br />
                  <span className="text-white">
                    for your computer.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
                  Three powerful automation tools that handle your repetitive work using real desktops and browsers.
                </p>
              </div>
              
              {/* Product showcase - simple horizontal layout */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
                <a 
                  href={process.env.NEXT_PUBLIC_SIDEKICK_URL!}
                  className="group text-center space-y-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    Sidekick
                  </div>
                  <div className="text-zinc-400 group-hover:text-zinc-300 transition-colors max-w-xs">
                    Personal browser automation
                  </div>
                </a>
                
                <a 
                  href={process.env.NEXT_PUBLIC_WEBTESTER_URL!}
                  className="group text-center space-y-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                    WebTester
                  </div>
                  <div className="text-zinc-400 group-hover:text-zinc-300 transition-colors max-w-xs">
                    Vision-based testing
                  </div>
                </a>
                
                <a 
                  href={process.env.NEXT_PUBLIC_AUTOTESTER_URL!}
                  className="group text-center space-y-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    AutoTester
                  </div>
                  <div className="text-zinc-400 group-hover:text-zinc-300 transition-colors max-w-xs">
                    Automated exam taking
                  </div>
                </a>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 2: Problems */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Text section */}
            <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Main headline with gradient */}
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-white">
                    The Problem with
                  </span>
                  <br />
                  <span className="text-white">
                    Current Automation Tools
                  </span>
                </h1>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="text-lg md:text-xl text-zinc-300">
                    Traditional automation tools are broken. They rely on brittle code, fake environments, and complex maintenance that breaks with every change.
                  </p>
                  {/* Subtle accent line */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60 hidden lg:block"></div>
                </div>
              </div>
            </div>
            
            {/* Problems section */}
            <div className="flex-1">
              <div className="relative">
                {/* Subtle glow effect behind problems */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transform -rotate-1"></div>
                <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                  <div className="space-y-6">
                    {/* Problem 1 */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">Fake Environments Don't Work</h3>
                      <p className="text-base text-zinc-400 leading-relaxed">Headless browsers, simulated environments, and virtual testing don&apos;t reflect real user experiences. You need real desktops with real browsers.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 2 */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">Brittle Code-Based Automation</h3>
                      <p className="text-base text-zinc-400 leading-relaxed">DOM selectors, CSS paths, and coded automation breaks constantly. Every UI change requires rewriting your automation scripts.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 3 */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">Repetitive Manual Work</h3>
                      <p className="text-base text-zinc-400 leading-relaxed">You&apos;re stuck doing the same browser tasks over and over - testing, training, data entry, form filling. It&apos;s mind-numbing and wastes time.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 4 */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">No Intelligence or Adaptation</h3>
                      <p className="text-base text-zinc-400 leading-relaxed">Traditional tools can&apos;t handle popups, changed text, moved buttons, network errors, or site redesigns. One small change breaks everything.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Section>
        </div>

        {/* Page 3: Solution */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Main headline with gradient */}
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold">
                  <span className="text-white">
                    Tylt: Vision-Based Automation
                  </span>
                  <br />
                  <span className="text-white">
                    That Actually Works
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-zinc-300 max-w-4xl">
                  Tylt can actually SEE your screen and control it using a real browser on a real desktop with real mouse and keyboard - just like you would, but automated.
                </p>
              </div>
              
              {/* Feature cards grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Vision AI That Actually Sees</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed flex-1">Our powerful vision model sees your website like a human does - identifying buttons, forms, and content visually, not through fragile DOM selectors.</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Plain English Instructions</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed flex-1">Write tests in plain English. No code, no selectors, no technical syntax. Just describe what you want tested like you&apos;re talking to a person.</p>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Intelligent & Adaptive</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed flex-1">Tylt overcomes popups, changed text, moved buttons, network errors, and even whole site redesigns. It&apos;s an intelligent agent, not a brittle script.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <Footer>
              <a 
                href={process.env.NEXT_PUBLIC_SIDEKICK_URL}
                className={`block ${theme.classes.primary} ${theme.classes.primaryHover} transition-colors`}
              >
                Sidekick
              </a>
              
              <a 
                href={process.env.NEXT_PUBLIC_WEBTESTER_URL}
                className={`block ${theme.classes.primary} ${theme.classes.primaryHover} transition-colors`}
              >
                WebTester
              </a>
              
              <a 
                href={process.env.NEXT_PUBLIC_AUTOTESTER_URL}
                className={`block ${theme.classes.primary} ${theme.classes.primaryHover} transition-colors`}
              >
                AutoTester
              </a>
            </Footer>
          </Section>
        </div>
    </PageLayout>
  );
}