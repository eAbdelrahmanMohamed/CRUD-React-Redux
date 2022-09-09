import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Add, Delete, Edit } from './redux/actions/actions';
import { add, delet, edit } from './redux/actions/types';

function App() {
    const Data = useSelector((d) => d);
    const dispatch = useDispatch();
    const [Input, setInput] = useState("");
    console.log(Data);
    return ( <
        div className = "App" >
        <
        div className = 'Input' >

        <
        input type = "text"
        name = ""
        placeholder = 'Enter Data To Store /Edit'
        onChange = {
            (x) => setInput(x.target.value)
        }
        / > <
        button type = "button"
        id = 'aBtn'
        onClick = {
            () => {
                dispatch({
                    type: add,
                    payload: Input
                })


            }
        } > Add < /button> < /
        div > <
        table className = 'Table' >
        <
        tr >
        <
        th > Data < /th>  < /
        tr > {
            Data.map(e =>
                <
                tr >
                <
                td >

                <
                p > { e } < /p> <
                button type = "button"
                className = 'eBtn'
                onClick = {
                    () =>
                    dispatch({
                        type: edit,
                        payload: Input,
                        index: e
                    })
                } > Edit < /button> <
                button type = "button"
                className = 'dBtn'
                onClick = {
                    () =>
                    dispatch({
                        type: delet,
                        payload: e
                    })
                } > Delete < /button>


                <
                /td> < /
                tr >
            )
        }

        <
        /table> < /
        div >
    );
}

export default App;