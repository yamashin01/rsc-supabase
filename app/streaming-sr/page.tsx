export const revalidate = 0
import { Suspense } from 'react'
import BlogList from '../components/blog-list'
import NewsList from '../components/news-list'
import Spinner from '../components/spinner'

export default function StreamingServerRenderingPage() {
  return (
    <section className="flex">
      <aside className="w-1/4">
        <section className="m-1 h-full border border-blue-500 bg-gray-200 p-1">
          <Suspense fallback={<Spinner color="border-green-500" />}>
            {/*@ts-ignore*/}
            <BlogList />
          </Suspense>
        </section>
      </aside>
      <main className="w-3/4">
        <section>
          <Suspense fallback={<Spinner />}>
            {/*@ts-ignore*/}
            <NewsList />
          </Suspense>
        </section>
      </main>
    </section>
  )
}
