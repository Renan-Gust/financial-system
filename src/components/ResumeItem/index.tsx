import * as C from './styles'

type Props = {
    color?: string;
    title: string;
    value: number;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color} >R$ {value}</C.Info>
        </C.Container>
    )   
}