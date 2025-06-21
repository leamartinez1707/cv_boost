import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Link to={'/'}>
                <img src="/cvboostlogo.png" alt="CV Boost Logo" className="size-16 rounded-xl" />
            </Link>
        </div>
    )
}

export default Logo
