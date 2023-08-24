export default function SecondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-center">
      <p>Second Layout</p>
      {children}
    </div>
  )
}
