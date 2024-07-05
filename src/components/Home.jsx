import styles from './Home.module.css'

function Home() {
    // Array de objeto
    const items = [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
        { id: 3, name: 'item 3' },
    ]

    return (
        <>
        {/* && = E lógico ele é usado para dizer se item.id é igual a 1 */}
            <div className={styles.container}>
                {items.map(item => item.id === 1 && (
                        <div key={item.id} className={styles.centralDiv}>
                            <h1>Titulo</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptates unde ut exercitationem molestias odio cum
                                eveniet commodi rem nostrum et officiis voluptatum optio
                                autem labore rerum, necessitatibus eaque sint enim!
                            </p>
                            <button className={styles.button}>Botão 1</button>
                            <button className={styles.button}>Botão 2</button>
                        </div>
                    ))}
            </div>
        </>
    )
}
export default Home 