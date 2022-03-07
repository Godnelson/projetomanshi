import {Background} from '../style'
export default function Banner({url}){
    return(
        <Background url={url}>
            <div className="banner">
                <h1>
                    Site Safe demais, bom mesmo
                </h1>
            </div>
        </Background>
    )
}