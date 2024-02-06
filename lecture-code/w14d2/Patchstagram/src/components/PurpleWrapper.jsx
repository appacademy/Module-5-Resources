



export default function PurpleWrapper(props){
    console.log("purple", props)
    return (
        <div style={{ color: "purple"}}>
            { props.children }
        </div>
    )
} 