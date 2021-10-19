import { useState, useEffect } from 'react'

import * as C from './styles/global'

import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'

import { Item } from './types/Item'

import { Categories } from './data/categories'
import { Items } from './data/items'

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

function App() {
    const [list, setList] = useState(Items)
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    useEffect(() => {
        setFilteredList( filterListByMonth(list, currentMonth) )
    }, [list, currentMonth])

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for(let i in filteredList) {
            if(Categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value
            } else {
                incomeCount += filteredList[i].value
            }
        }

        setIncome(incomeCount)
        setExpense(expenseCount)

    }, [filteredList])

    function handleMonthChange(newMonth: string) {
        setCurrentMonth(newMonth)
    }

    function handleAddItem(item: Item) {
        let newList = [...list]
        newList.push(item)
        setList(newList)
    }

    return (
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema financeiro</C.HeaderText>
            </C.Header>
            <C.Body>
                <InfoArea 
                    currentMonth={currentMonth} 
                    onMonthChange={handleMonthChange}
                    income={income}
                    expense={expense}
                />

                <InputArea onAdd={handleAddItem} />

                <TableArea list={filteredList} />
            </C.Body>
        </C.Container>
    );
}
  
export default App;