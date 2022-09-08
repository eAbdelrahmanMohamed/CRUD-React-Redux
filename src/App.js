import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        div className = 'Input' >

        <
        input type = "text"
        name = ""
        value = ""
        placeholder = 'Enter Data To Store' / >
        <
        button type = "button"
        onClick = {
            () => { console.log("Added") }
        } > Add < /button> < /
        div > <
        table className = 'Table' >

        <
        th > Data < /th>  <
        tr >
        <
        td >
        <
        p > test < /p> <
        button type = "button"
        onClick = {
            () => console.log("Edit")
        } > Edit < /button> <
        button type = "button"
        onClick = {
            () => console.log("delete")
        } > Delete < /button>

        <
        /td> < /
        tr > <
        /table> < /
        div >
    );
}

export default App;