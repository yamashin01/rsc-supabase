import Spinner from '@/app/components/spinner'
import EditTodo from '@/app/components/todo-edit'
import TodoList from '@/app/components/todo-list'
import { Suspense } from 'react'

export default async function TodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-5px)] w-1/4 bg-gray-200`}>
        <EditTodo />
        <Suspense fallback={<Spinner />}>
          {/*@ts-ignore*/}
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}
