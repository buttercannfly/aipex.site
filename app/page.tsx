import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Chrome, Bookmark, History, Zap, Command, Puzzle, Keyboard, Settings, Moon, Bot, GitBranch } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Chrome className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">AIPex</span>
          </div>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Pricing</a>
            <a href="https://github.com/buttercannfly/AIpex" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">GitHub</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Supercharge Your Chrome Experience with AIPex</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The best tabs extension for Google Chrome, powered by AI</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Add to Chrome
          </Button>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Chrome className="h-8 w-8 text-blue-600" />}
              title="Tab Management"
              description="Switch, open, close, and search your tabs with ease"
            />
            <FeatureCard
              icon={<Bookmark className="h-8 w-8 text-green-600" />}
              title="Bookmark Management"
              description="Browse and manage your bookmarks efficiently"
            />
            <FeatureCard
              icon={<History className="h-8 w-8 text-purple-600" />}
              title="History Search"
              description="Search your browsing history with powerful filters"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-yellow-600" />}
              title="Productivity Boost"
              description="50+ actions to improve your productivity"
            />
            <FeatureCard
              icon={<Command className="h-8 w-8 text-red-600" />}
              title="Special Commands"
              description="Filter and perform more actions with ease"
            />
            <FeatureCard
              icon={<Puzzle className="h-8 w-8 text-indigo-600" />}
              title="Integrations"
              description="Seamless integrations with Notion, Figma, Docs, Asana, and more"
            />
            <FeatureCard
              icon={<Keyboard className="h-8 w-8 text-pink-600" />}
              title="Shortcuts"
              description="Customizable shortcuts for actions like muting, pinning, and bookmarking"
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8 text-gray-600" />}
              title="Advanced Settings"
              description="Troubleshoot browsing issues with advanced settings"
            />
            <FeatureCard
              icon={<Moon className="h-8 w-8 text-blue-400" />}
              title="Dark Mode"
              description="Easy on the eyes with a sleek dark mode"
            />
            <FeatureCard
              icon={<Bot className="h-8 w-8 text-green-400" />}
              title="ChatGPT Sidebar"
              description="Access AI-powered assistance right in your browser"
            />
            <FeatureCard
              icon={<GitBranch className="h-8 w-8 text-orange-600" />}
              title="Arc-like Experience"
              description="Enjoy features similar to the popular Arc browser"
            />
          </div>
        </section>

        <section id="demo" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">See AIPex in Action</h2>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src="https://source.unsplash.com/random/1600x900?chrome+extension"
              alt="AIPex Demo"
              width={1600}
              height={900}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="AIPex has completely transformed the way I browse the web. It's a game-changer!"
              author="Sarah K., Web Developer"
            />
            <TestimonialCard
              quote="The AI-powered features are incredibly useful. I can't imagine using Chrome without AIPex now."
              author="Michael R., Digital Marketer"
            />
            <TestimonialCard
              quote="As a power user, AIPex gives me the control and efficiency I've always wanted in a browser extension."
              author="Emily L., UX Designer"
            />
          </div>
        </section>

        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
          <div className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Free and Open Source</CardTitle>
                <CardDescription>AIPex is completely free to use and open source</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>All features included</li>
                  <li>Regular updates</li>
                  <li>Community-driven development</li>
                  <li>Contribute on GitHub</li>
                </ul>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  Add to Chrome
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <FAQItem
                question="Is AIPex really free?"
                answer="Yes, AIPex is completely free to use and open source. You can find the source code on our GitHub repository."
              />
              <FAQItem
                question="How does AIPex compare to other tab management extensions?"
                answer="AIPex offers a unique combination of AI-powered features, extensive integrations, and a user-friendly interface, making it stand out from other tab management extensions."
              />
            </TabsContent>
            <TabsContent value="technical">
              <FAQItem
                question="Does AIPex work with other Chromium-based browsers?"
                answer="While AIPex is primarily designed for Google Chrome, it may work with other Chromium-based browsers. However, we recommend using it with Chrome for the best experience."
              />
              <FAQItem
                question="How does AIPex handle user data and privacy?"
                answer="AIPex takes user privacy seriously. All data is processed locally on your device, and we do not collect or store any personal information. The extension's permissions are limited to what's necessary for its functionality."
              />
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Chrome className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">AIPex</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/buttercannfly/AIpex" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Terms of Service</a>
            </div>
          </div>
          <Separator className="my-4" />
          <p className="text-center text-gray-600 dark:text-gray-300">© 2023 AIPex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ quote, author }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <blockquote className="text-lg italic mb-4">"{quote}"</blockquote>
        <p className="text-right font-semibold">- {author}</p>
      </CardContent>
    </Card>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  );
}