import React, { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import Search from './components/Search';
import data from './data/data';

localStorage.setItem('data', JSON.stringify(data));

const App = () => {
    const [tableData, setTableData] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        const dataItems = JSON.parse(localStorage.getItem('data'));
        setTableData(
            dataItems.filter((item) =>
                item.name.toLowerCase().includes(searchData.toLowerCase())
            )
        );
    }, [searchData]);

    return (
        <div>
            <Search setSearchData={setSearchData} />
            <DataTable tableData={tableData} />
        </div>
    );
};

export default App;
