 export const Items = ({Name, url}) => {
    return(

        <a id="item_class" class="nav-link active" aria-current="page" href={url}>
            {Name}
            </a>
      
    )
}

