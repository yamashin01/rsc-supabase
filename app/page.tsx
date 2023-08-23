import NotesList from './components/notes-list'

export default function Home() {
  return (
    <main className="m-10 text-center">
      <div>
        <p>Hello World</p>
        {/* @ts-ignore*/}
        <NotesList />
      </div>
    </main>
  )
}
