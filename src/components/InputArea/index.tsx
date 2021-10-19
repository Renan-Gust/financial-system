import { useState, FormEvent } from 'react'

import * as C from './styles';

import { Item } from '../../types/Item';
import { Categories } from '../../data/categories';

type addItemProps = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: addItemProps ) => {
    const [titleField, setTitleField] = useState("")
    const [categoryField, setCategoryField] = useState("")
    const [dateField, setDateField] = useState('')
    const [valueField, setValueField] = useState(0)

    let categoryKeys: string[] = Object.keys(Categories);

    function handleAddItem(e: FormEvent) {
        e.preventDefault()

        let errors: string[] = [];

        if(isNaN(new Date(dateField).getTime())) errors.push('Data inválida!');

        if(!categoryKeys.includes(categoryField)) errors.push('Categoria inválida!');

        if(titleField === '') errors.push('Título vazio!');

        if(valueField <= 0) errors.push('Valor inválido!');
            
        if(errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            onAdd({
                title: titleField,
                category: categoryField,
                value: valueField,
                date: new Date(dateField)
            });

            clearFields();
        }

        function clearFields() {
            setDateField('');
            setCategoryField('');
            setTitleField('');
            setValueField(0);
        }
    }

    return(
        <C.Container>
            <C.Form>
                <C.BlockInput>
                    <C.Label>Título</C.Label>
                    <input 
                        type="text" 
                        placeholder="Digite o nome do item" 
                        value={titleField} 
                        onChange={(e) => setTitleField(e.target.value)} 
                    />
                </C.BlockInput>

                <C.BlockInput>
                    <C.Label>Categoria</C.Label>
                    <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} value={key}>{Categories[key].title}</option>
                        ))}
                    </C.Select>
                </C.BlockInput>

                <C.BlockInput>
                    <C.Label>Valor</C.Label>
                    <input 
                        type="number" 
                        placeholder="Digite o valor" 
                        value={valueField} 
                        onChange={(e) => setValueField(Number(e.target.value))} 
                    />
                </C.BlockInput>

                <C.BlockInput>
                    <C.Label>Data</C.Label>
                    <input
                        type="date" 
                        value={dateField}
                        onChange={(e) => setDateField(e.target.value)}
                    />
                </C.BlockInput>

                <C.Button onClick={handleAddItem}>Adicionar</C.Button>
                
            </C.Form>
        </C.Container>
    )
}