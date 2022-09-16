function Sugestao(props) {
    const path = props.name + ".svg"
    return (
        <div class="sugestao">
                <div class="usuario">
                    <img src={path} />
                    <div class="texto">
                        <div class="nome">{props.name}</div>
                        <div class="razao">{props.status}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const suggestionInfo = [{ user: "bad.vibes.memes", message: "Segue você" },
                            { user: "chibirdart", message: "Segue você" },
                            { user: "razoesparaacreditar", message: "Novo no Instagram" },
                            { user: "adorable_animals", message: "Segue você" },
                            { user: "smallcutecats", message: "Segue você" }]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionInfo.map((info) => <Sugestao name = {info.user} status = {info.message}/>)}
        </div>
    )
}