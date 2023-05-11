import React from 'react'
import "./Search.css"


function Search({value, data, change, submit}) {
    return (
        <>
            <form className="search__container col-5" onSubmit={submit}>
                <input type="text" value={value} onChange={change} placeholder="e.g. London,England" className="col-10 bg-light rounded" />
            </form>
        </>
    )
}

export default Search
