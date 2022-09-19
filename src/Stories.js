function Story(props) {
    const path = props.user + ".svg"
    return (
        <div class="story">
            <div class="imagem">
                <img src = {path} alt={props.user}/>
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}

export default function Stories() {
    const users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]
    return (
        <div class="stories">
            {users.map((name) => <Story user={name} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div >
    )
}