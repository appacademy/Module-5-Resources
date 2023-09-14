const style = {
  position: "absolute",
  bottom: "0",
  width: "100vw",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Footer() {
  return (
    <div id="footer" style={style}>
      {false ? (
        <img
          src="https://gifdb.com/images/high/saitama-funny-eyebrows-up-d2zddr6q5ligpbie.gif"
          alt=""
          id="success-img"
        />
      ) : (
        ":("
      )}
    </div>
  );
}
