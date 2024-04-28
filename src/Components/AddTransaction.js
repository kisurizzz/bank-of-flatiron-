import React, {useState} from "react"

function AddTransaction(){
    return(
        <div className="add-transaction">
            <form className="add-forms">
                <div className="input-fields">
                    <input type="date" name="date"  ></input>
                    <input type="text" name="description"  ></input>
                    <input type="text" name="category"  ></input>
                    <input type="number" name="amount"  ></input>
                </div>
                <button type="submit">
                    Add transaction
                </button>
            </form>
        </div>
    )
}
export default AddTransaction