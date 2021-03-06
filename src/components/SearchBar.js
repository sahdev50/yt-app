import React, {useState} from 'react';

const SearchBar = ({onFormSubmit})=>{
    const [term, setTerm] = useState('');

    const onSubmit = event =>{
        event.preventDefault();

        this.props.onFormSubmit(term);
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="search">Video Search</label>
                    <input id="search" type="text" value={term} onChange={(event)=>{setTerm(event.target.value)}} />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;