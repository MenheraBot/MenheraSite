import style from '../styles/components/footer.module.css'

export default function Layout() {
  return (
    <footer className={style.footer}>
      <a href="https://github.com/ySnoopyDogy/MenheraBot" target="_blank" rel="noopener noreferrer">
        Menhera foi feita com <div id={style.heart}> ❤️ </div> por Luxanna
        </a>
    </footer>
  )
}
