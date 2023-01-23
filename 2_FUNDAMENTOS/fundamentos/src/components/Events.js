const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)

        console.log('ativou o evento!')
    }

    const renderSomething = (x) => {

        if (x) {

            return <h1>Renderizando isso</h1>

        } else {
            return <h1>tambem posso renderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>
                    Clique aqui tambem
                </button>
                <button onClick={() => {
                    if (true) {
                        console.log('Isso não deveria existir =)')
                    }
                }}>
                    Clica aqui, por favor
                </button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}</div>
        </div>
    )
}

export default Events