export default function Post ({ props }: {
  props: { id: string, title: string, body: string }
}) {
  return (
    <main className="flex-col place-items-center">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </main>
  )
}