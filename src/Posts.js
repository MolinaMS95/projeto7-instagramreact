import React from "react"

function Post(props) {
    const path = props.name + ".svg"
    const likeImg = props.like + ".svg"
    const [saved, setSaved] = React.useState("bookmark-outline")
    const [liked, setLiked] = React.useState("heart-outline")
    const [filling, setFilling] = React.useState("")
    const [likes, setLikes] = React.useState(props.likeNumber)
    
    function savePost(){
        setSaved((saved === "bookmark") ? "bookmark-outline" : "bookmark")
    }

    function likePostfromImg(){
        setLiked("heart")
        setFilling("liked")
        setLikes((liked === "heart") ? likes : likes+1)
    }

    function likePost(){
        setLiked((liked === "heart") ? "heart-outline" : "heart")
        setFilling((filling === "liked") ? "" : "liked")
        setLikes((liked === "heart") ? likes-1 : likes+1)
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={path}/>
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.img} onClick={likePostfromImg}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={likePost} class={filling} name={liked}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={savePost} name={saved}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likeImg} />
                    <div class="texto">
                        Curtido por <strong>{props.like}</strong> e <strong>outras {likes.toLocaleString('pt-BR')} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const postInfo = [{ user: "meowed", image: "gato-telefone.svg", userLike: "respondeai", likeCount: 101523 },
                      { user: "barked", image: "dog.svg", userLike: "adorable_animals", likeCount: 99159 }]

    return (
        <div class="posts">
            {postInfo.map((info) => <Post name={info.user} img={info.image} like={info.userLike} likeNumber={info.likeCount} />)}
        </div>
    )
}