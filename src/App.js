import React, { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import Search from './components/Search';
import data from './data/data';

localStorage.setItem('data', JSON.stringify(data));

const App = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const dataItems = JSON.parse(localStorage.getItem('data'));
        setTableData(dataItems);
    }, []);

    return (
        <div>
            <Search />
            <DataTable tableData={tableData} />
        </div>
    );
};

export default App;
