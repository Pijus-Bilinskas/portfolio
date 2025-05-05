import { useState } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Github from './components/Github';

function App() {
  const [showContent, setShowContent] = useState(false);



  return (
    <main className='relative min-h-screen overflow-x-hidden'>
        <Hero setShowContent={setShowContent}/>
        {showContent && (
          <div className={`flex flex-col items-center justify-center min-h-screen  transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <About isVisible={showContent} />
            <Github />
          </div>
        )}

    </main>
  )
}

export default App
