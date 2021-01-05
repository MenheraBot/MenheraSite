import { getCommands } from '../services/api';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import Head from '../components/head';
import Footer from '../components/footer';
import style from '../styles/pages/commands.module.css';

export default function CommandPage() {

  function captalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [commands, setCommands] = useState([]);
  const [category, setCategory] = useState('ações');

  function changeCategory(category) {
    setCategory(category);
    getCommands()
      .then(res => {
        const reduced = res.reduce((p, c) => {
          if (c.category === category) p.push({ name: captalize(c.name), description: c.description });
          return p;
        }, [])
        setCommands(reduced)
      })
  }

  useEffect(() => {
    const fetchData = () =>
      getCommands()
        .then(res => {
          const reduced = res.reduce((p, c) => {
            if (c.category === 'ações') p.push({ name: captalize(c.name), description: c.description });
            return p;
          }, [])
          setCommands(reduced)
        });

    fetchData();
  }, []);

  return (
    <div>
      <Head title="Comandos | Menhera's Site" favicon="assets/favicon.png" />
      <Header currentPage="commands" />
      <div className={style.container}>
        <div className={style.top}>
          <ul>
            <button onClick={() => changeCategory('ações')} className={category === 'ações' ? style.boxActive : style.box}><li>Ações</li></button>
            <button onClick={() => changeCategory('diversão')} className={category === 'diversão' ? style.boxActive : style.box}><li>Diversão</li></button>
            <button onClick={() => changeCategory('economia')} className={category === 'economia' ? style.boxActive : style.box}><li>Economia</li></button>
            <button onClick={() => changeCategory('info')} className={category === 'info' ? style.boxActive : style.box}><li>Informativo</li></button>
            <button onClick={() => changeCategory('moderação')} className={category === 'moderação' ? style.boxActive : style.box}><li>Moderação</li></button>
            <button onClick={() => changeCategory('rpg')} className={category === 'rpg' ? style.boxActive : style.box}><li>Roleplay</li></button>
            <button onClick={() => changeCategory('util')} className={category === 'util' ? style.boxActive : style.box}><li>Útil</li></button>
          </ul>
        </div>
        <div className={style.bottom}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {commands?.map(cmd => (
                <tr key={cmd.name}>
                  <td>{cmd.name}</td>
                  <td>{cmd.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div >
  )
}
