import { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";

import { Field } from '../ui/Field/index.jsx';
import { Button } from '../ui/Button/index.jsx';
import classes from './styles.module.css';


export function AttributeForm({ title = "", variant }) {
    const [message, setMessage] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const formRef = useRef();
    const [code, setCode] = useState('name');
    const [pathEl, setPathEl] = useState('');
    const [name, setName] = useState('');
    const [performance, setPerformance] = useState('');
    const [pic, setPic] = useState('');
    const [cancel, setCancel] = useState(false);

    function setCodeHandler(event) {
        setCode(event.target.value);
        buttonDisabled(event.target.value);
    }
    function setPathElHandler(event) {
        setPathEl(event.target.value);
        buttonDisabled(event.target.value);
    }
    function setNameHandler(event) {
        setName(event.target.value);
        buttonDisabled(event.target.value);
    }
    function setPerformanceHandler(event) {
        setPerformance(event.target.value);
        buttonDisabled(event.target.value);
    }
    function setPicHandler(event) {
        setPic(event.target.value);
        buttonDisabled(event.target.value);
    }
    function setCancelFlag(value) {
        setCancel(value);
    }
    function clearFields() {
        setCode('');
        setPathEl('');
        setName('');
        setPerformance('');
        setPic('');
    }

    function buttonDisabled(text) {
        if (text.length > 0) {
            setButtonDisabled(false);
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        if ((!cancel) && (code === '' || pathEl === '' || pic === '' || name === '' || Performance === '')) {
            setMessage('Заполните все поля');
            console.log(message);
            return;
        }
        setMessage('');
        clearFields();
    }

    useEffect(() => {
        if (code.length == 0 && pathEl.length == 0 && pic.length == 0 && name.length == 0 && Performance.length == 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
            setCancelFlag(false);
        }
    }
    )

    return (
        <div className={classes.form}>
            <h1 className={classes.title}>{title}</h1>
            <form onSubmit={onSubmit} ref={formRef}>
                <Field
                    value={code}
                    onChange={setCodeHandler}
                    label={"Код"}
                />
                <Field
                    label="Путь к элементу"
                    value={pathEl}
                    onChange={setPathElHandler} />
                <Field
                    label="Наименование"
                    value={name}
                    onChange={setNameHandler} />
                <Field
                    label="Представление"
                    value={performance}
                    onChange={setPerformanceHandler} />
                <Field
                    label="Пиктограмма"
                    value={pic}
                    onChange={setPicHandler} />
                <div className="flex justify-center">
                    <Button disabled={isButtonDisabled} onClick={() => setCancelFlag(true)}>Отменить</Button>
                    <Button disabled={isButtonDisabled}>Сохранить</Button>
                </div>

                {message && (<div className={classes.message}>{message}</div>)}

            </form>
        </div
        >);
}

AttributeForm.propTypes = {
    title: PropTypes.string,
}