import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa'

export const SocialLinks = () => {
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes réseaux sociaux</h3>
            <ul className="mt-5">
                <li className='flex items-center'><FaYoutube className='mr-3'/><a className="hover:text-[#33E7F2]" href="https://www.youtube.com/watch?v=3zz1Jag206c">Youtube</a></li>
                <li className='flex items-center'><FaTwitter className='mr-3'/><a className="hover:text-[#33E7F2]" href="https://www.youtube.com/results?search_query=d%C3%A9mmarer+avec+next.ts">Twitter</a></li>
                <li className='flex items-center'><FaDiscord className='mr-3'/><a className="hover:text-[#33E7F2]" href="https://www.youtube.com/results?search_query=d%C3%A9mmarer+avec+next.ts">Discord</a></li>
            </ul>
        </section>
    )
}