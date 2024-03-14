

export default function PurpleWrapper(props){
    console.log("purple wrapper", props.children)
    return (
        <div style={{ color: "purple"}}>
            { props.children }
        </div>

    )
}