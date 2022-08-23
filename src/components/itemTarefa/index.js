export default function ItemTarefa(props) {
    return (
        <li>
            {props.item}
            <span onClick={e => props.removerTarefas(props.item)}/>
        </li>
    )
}