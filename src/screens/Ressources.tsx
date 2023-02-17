import { BsLink } from 'react-icons/bs'

export const Ressources = () => {
    return (
        <main>
            <h3 className="text-3xl font-extrabold mb-4">Ressources de la chaine</h3>
            <ul>
                <li className='flex items-center'><BsLink className='mr-3'/><a className="hover:underline" href="https://www.youtube.com/watch?v=3zz1Jag206c">YT_1</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className="hover:underline" href="https://www.youtube.com/results?search_query=d%C3%A9mmarer+avec+next.ts">YT_2</a></li>
            </ul>
        </main>
    )
}