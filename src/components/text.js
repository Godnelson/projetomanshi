import {Texto} from '../style'
function Text({titulo, corpo}){
    return(
        <Texto>
            <div>
                <h2>
                    {titulo}
                </h2>
                <p>
                    {corpo}
                </p>
            </div>
        </Texto>
    )
}

export default Text