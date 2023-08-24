export default function ThirdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-center">
      <p>Third Layout</p>
      {children}
    </div>
  )
}
