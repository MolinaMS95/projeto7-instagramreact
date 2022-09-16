function User(props){
    return(
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <strong>{props.id}</strong>
                <span>
                    {props.nick}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {
    const user = {profile:"catanacomics", name: "Catana", picture:"catanacomics.svg"}

    return (
        <User image={user.picture} id={user.profile} nick={user.name}/>
    )
}