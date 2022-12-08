import facebook from '../../assets/icones/fb.png'
import twitter from '../../assets/icones/tw.png'
import instagram from '../../assets/icones/ig.png'
import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a
                href="https://www.facebook.com/AluraCursosOnline/"
                target="_blank"
                rel="noreferrer"
                >
                <img src={facebook} alt="ícone do facebook" />
                </a>
                <a
                href="https://twitter.com/aluraonline?lang=en"
                target="_blank"
                rel="noreferrer"
                >
                <img src={twitter} alt="ícone do twitter" />
                </a>
                <a
                href="https://www.instagram.com/aluraonline/?hl=en"
                target="_blank"
                rel="noreferrer"
                >
                <img src={instagram} alt="ícone do instagram" />
                </a>
            </div>
            <p>Desenvolvido por <a target='_blank' rel='noreferrer' href='https://github.com/lucasadsr' className={styles}><em>Lucas Araújo</em></a>
            </p>
        </footer>
    )
}