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
            <div className="max-w-[700px] mx-auto pt-16 prose font-serif prose-emerald">
              <h1>Meu Notion</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                molestiae quia, laudantium ducimus, quasi natus eius quidem
                voluptatem esse, assumenda est? Corrupti earum molestias beatae
                enim, consectetur ut dolorem ipsa!
              </p>
              <p>
                <a href="#">Aprender mais</a>
              </p>
              <pre>
                <code>&lt;div classname="bg-red-50"&gt; ola &lt;/div&gt;</code>
              </pre>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
