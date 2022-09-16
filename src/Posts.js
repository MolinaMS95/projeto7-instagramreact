function Post(props) {
    const path = props.name + ".svg"
    const likeImg = props.like + ".svg"
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={path} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.img} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likeImg} />
                    <div class="texto">
                        Curtido por <strong>{props.like}</strong> e <strong>outras {props.likeNumber.toLocaleString('pt-BR')} pessoas</strong>
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