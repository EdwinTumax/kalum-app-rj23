import { CarreraTecnicaList } from './components/CarreraTecnicaList';

const initCarrerasTecnicas = [
    {codigo: '1', nombre: 'Programación con java'},
    {codigo: '2', nombre: 'Desarrollo de aplicaciones web'}
  ]

export const App = () => {
    return (
        <>
            <h1>Carreras Técnicas</h1>
            <CarreraTecnicaList carrerasTecnicas = {initCarrerasTecnicas}/>

        </>
    )
}