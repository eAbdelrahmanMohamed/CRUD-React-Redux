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
        placeholder = 'Enter Data To Store'
        onChange = {
            (x) => setInput(x.target.value)
        }
        / > <
        button type = "button"
        onClick = {
            () => {
                dispatch({
                        type: add,
                        payload: Input
                    })
                    //Add(Input)
                    //console.log("Added")

            }
        } > Add < /button> < /
        div > <
        table className = 'Table' >

        <
        th > Data < /th>  <
        tr >
        <
        td > {
            Data.map(e =>
                <
                div >

                <
                p > { e } < /p> <
                button type = "button"
                onClick = {
                    () =>
                    //console.log(Data.indexOf(e))
                    dispatch({
                        type: edit,
                        payload: Input,
                        index: e
                    })
                } > Edit < /button> <
                button type = "button"
                onClick = {
                    () =>
                    dispatch({
                        type: delet,
                        payload: e
                    })
                    //console.log("delete")
                } > Delete < /button>


                <
                /div>
            )
        }

        <
        /td> < /
        tr > <
        /table> < /
        div >
    );
}

export default App;