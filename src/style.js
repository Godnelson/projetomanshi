import style from 'styled-components'

export const Container = style.div`

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: brown;
        height: 100%;
        width: 100%;
        flex-direction: column;
    }

`

export const List = style.ul`
    .menu{
        display: flex;
        flex-direction: row;
        background-color: #2E5266;
        justify-content:space-between;
        align-items: center;
    }
    {
        width: 100%;
    }
    li,a{
        color:white;
        padding: 0.3% 5.3%;
    }
`

export const Background = style.div`
    .banner{
        background-image: url('${(props) => props.url}');
        background-size: cover;
        background-position: 50% 0;
        padding:0px;
        margin:0px;
        display:flex;
        align-items: center;
        justify-content: center;
        color:#fff;
        height:94vh;
        width:99vw;
    }
`

export const Texto = style.div`
    color:white;
    width:90%;
    margin: 3% 0;
`

export const ImageContainer = style.div`
    .polegada{
        display:flex;
        justify-content:center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction:row;
        background-color:#fff;
    }

    .polegada div{
        margin: 10px;
    }
`