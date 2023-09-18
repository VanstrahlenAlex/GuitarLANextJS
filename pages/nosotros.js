import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";



export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description="Sobre Nosotros, guitarLA, tienda de musica"
        >
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>
                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"></Image>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores? Sapiente voluptatum aperiam dolore, delectus rerum eveniet officiis beatae expedita nemo voluptates nobis cum quibusdam optio modi error atque? Modi!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore nisi, numquam laborum accusantium distinctio veritatis suscipit hic dolor omnis dolorum soluta. Saepe aut laboriosam pariatur aspernatur, dolores tenetur. Error?
                        </p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aspernatur dolore in ea amet necessitatibus quasi delectus ullam ex corporis illum nulla qui enim, aliquid saepe. Quasi animi dolores eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex dolore quisquam voluptatum dolorem adipisci cupiditate enim blanditiis esse voluptates veniam explicabo, tempore, commodi iste asperiores error labore quis deleniti.
                        </p>
                    </div>
                </div>
            </main>
            
        </Layout>

    )
}

