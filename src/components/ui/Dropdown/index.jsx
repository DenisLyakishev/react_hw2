import { useState, useRef, useEffect } from 'react';

import {
    DropdownContainer,
    DropdownButton,
    DropdownItem,
    DropdownList,
    DropdownLabel

} from './styles';

const PRODUCTS = [
    {   id: 1,  name: 'Горчица' },
    {   id: 2,  name: 'Малиновое варенье'     },
    {   id: 3,  name: 'Томатная паста'    },
    {   id: 4,  name: 'Консервированная кукуруза' },
    {   id: 5,  name: 'Консервированный горошек'     },
    {   id: 6,  name: 'Яйца'    },
    {   id: 7,  name: 'Масло растительное'    },
]

export function Dropdown({ label = 'Наименование' }) {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState({});

    function open() {
        //console.log('open');
        setOpen(true);
    }
    function close() {
        setOpen(false);
    }
    function onChange(item) {
        setSelected(item);
        close();
    }

    return (
        <DropdownContainer>
            <DropdownLabel>{label}</DropdownLabel>
            <DropdownButton onClick={open} >{selected.name || 'Не выбрано'}</DropdownButton>
            <DropdownList open={isOpen}>
                {PRODUCTS.map((product) => <DropdownItem
                    onClick={() => { onChange(product) }}
                    active={(selected.id === product.id) ? 'true' : 'false'}
                    key={product.id}
                >
                    {product.name}
                </DropdownItem>)}
            </DropdownList>
        </DropdownContainer>
    )
}