import RouterBtn from '../components/router-btn'

export default function BlogPage() {
  return (
    <main className="m-10 text-center">
      <div className="m-10 text-center">
        <span className="text-lg">
          Click a title on the left to view detail
        </span>
        <div className="my-5 flex justify-center">
          <RouterBtn />
        </div>
      </div>
    </main>
  )
}
