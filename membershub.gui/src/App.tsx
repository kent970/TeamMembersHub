import * as React from 'react';
import TableHeadComponent from "./components/TableHeadComponent";
import TableBodyComponent from "./components/TableBodyComponent";

const App = () => {
    return (
        <div className="App" style={{padding: '32px'}}>

            <div className="AppHeader" style={{paddingBottom: '32px'}}>
                <TableHeadComponent/>
            </div>
            <TableBodyComponent/>
        </div>
    );
}
export default App








