import SearchBar from "./SearchBar";
import AddTransaction from "./AddTransaction";
import Transactions from "./Transaction";
import TransactionTable from "./TransactionTable";

function FilterContainer(){
    return(
        <div>
            <SearchBar/>
            <AddTransaction/>
            <TransactionTable/>
            
        </div>
    )
}

export default FilterContainer