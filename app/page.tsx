import { Suspense } from 'react'
import NotesList from './components/notes-list'
import Spinner from './components/spinner'
import TimerCounter from './components/timer-counter'

export default function Page() {
  return (
    <main className="m-10 text-center">
      <div>
        <p>Hello World</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore*/}
          <NotesList />
        </Suspense>
        <TimerCounter />
      </div>
    </main>
  )
}
