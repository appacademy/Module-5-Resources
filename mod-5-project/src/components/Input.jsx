export default function Input() {
  // todo: run my logic
  // const { someProp, ...restOfKeys } = props;
  return (
    <>
    <h1>hi from /nested/route</h1>
    <input
      id="some-id"
      onChange={() => {
        console.log("hey i'm changing!");
      }}
      className=""
    />
    </>
  );
}
