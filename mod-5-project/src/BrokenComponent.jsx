export default function BrokenComponent() {
  function triggerException() {
    throw new Error("ahhhhhh!!!!")
  }
  return (
    <div>
      <span>I should not be rendering</span>
      {triggerException()}
    </div>
  )
}