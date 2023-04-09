import React, {useState} from 'react'
import axios from "axios"

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [urlsList, seturlsList] = useState([]);


    const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    };

    const handleForm = (e) => {
        e.preventDefault();
        
        axios({
            url: "YOUR_MANGA_GENERATOR_BACKEND_URL",
            method: "POST",

            data: {
                scenario: searchInput,
                style: 'manga'
            }
        }).then((res) => {
            console.log(res.data)
            var items = res.data.map((item) => <div> <h3>{item.text}</h3> <img src={item.imageUrl} /></div>)
            seturlsList(items)
        })
        };

    // if (searchInput.length > 0) {
    //     countries.filter((country) => {
    //     return country.name.match(searchInput);
    // });
    // }

return <div>

    <div class="col-8 mx-auto">
        <input
        class='form-control'
        type="search"
        placeholder="What would you like to create ?"
        onChange={handleChange}
        value={searchInput} />        
    </div>
    
    <div class="form-check col-8 mt-5 mx-auto">
        <p>Choose the type : </p>
        <div class="form-check">            
            <input class="form-check-input mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
            <label class="form-check-label" for="flexRadioDefault1">
                Manga
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
                Disney
            </label>
        </div>
    </div>

    <button onClick={(e) => handleForm(e)} type="button" class="btn btn-primary m-2">
        Send
    </button>

    
    
    
    <div>{urlsList}</div>
</div>
};

export default SearchBar;