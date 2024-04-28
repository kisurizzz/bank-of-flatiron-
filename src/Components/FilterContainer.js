import SearchBar from "./SearchBar";
import AddTransaction from "./AddTransaction";
import Transactions from "./Transaction";
import TransactionTable from "./TransactionTable";
import React, {useState} from "react";

function FilterContainer(){
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    };

    const handleSearchChange = (term) => {
      setSearchTerm(term);
    };

    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div>
            <SearchBar onSearchChange={handleSearchChange}/>
            <AddTransaction onAddTransaction={handleAddTransaction}/>
            <TransactionTable transactionsFun = {filteredTransactions}/>
            
        </div>
    )
}

export default FilterContainer