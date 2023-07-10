import { Editor } from './components/Editor/Editor'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 p-8 h-screen grid place-items-center">
        <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[800px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
          <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
            <div className="flex gap-2 group">
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400 cursor-default" />
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400 cursor-default" />
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400 cursor-default" />
            </div>
          </aside>
          <main className="p-4">
            <Editor />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
