import React from "react"

const isValidUrl = urlString=> {
    try { 
        return Boolean(new URL(urlString)); 
    }
    catch(e){ 
        return false; 
    }
}

function User(props){
    const [name, setName] = React.useState(props.nick)
    const [username, setUsername] = React.useState(props.id)
    const [img, setImg] = React.useState(props.image)

    function changeUsername(){
        let newName = prompt('Qual o seu nome?')
        while(newName === "" || newName === null){
            newName = prompt('Qual o seu nome?')
        }
        setName(newName)
        let newUsername = prompt('Qual seu nome de usuário?')
        while(newUsername === "" || newUsername === null){
            newUsername = prompt('Qual seu nome de usuário?')
        }
        setUsername(newUsername)
    }

    function changePicture(){
        let newImg = prompt('Qual a url da sua imagem?')
        while(!isValidUrl(newImg)){
            newImg = prompt('Qual a url da sua imagem?')
        }
        setImg(newImg)
    }

    return(
        <div class="usuario">
            <img src={img} onClick ={changePicture} />
            <div class="texto">
                <strong>{username}</strong>
                <span>
                    {name}
                    <ion-icon name="pencil" onClick={changeUsername}></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {

    const username = "catanacomics"
    const name = "Catana"
    const picture = "catanacomics.svg"
    
    return (
        <User image={picture} id={username} nick={name}/>
    )
}