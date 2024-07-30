import { useState } from "react";
import Search from "./Search";
import BookList from "./BookList";

function BookSearchProvider(){
    const [searchTerm, setSearchTerm] = useState("cats");

    return (
        <div>
            <Search setSearchTerm={setSearchTerm}/>
            <BookList searchTerm ={searchTerm}/>

        </div>
    )
}

export default BookSearchProvider
