function Menu({
    name,link
}){
    return(
        <li>
            <a href={link}>{name}</a>
        </li>
    )
}

export default Menu