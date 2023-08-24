export default function FirstLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-center">
      <p>First Layout</p>
      {children}
    </div>
  )
}
