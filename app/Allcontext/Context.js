"use client"
import React, { createContext, useState } from 'react';
export const CentralData = createContext()


function context(props) {
    const [search, setSearch] = useState([]);

    return (
        <>
            <CentralData.Provider value={[search, setSearch]}>
                {props.children}
            </CentralData.Provider>
        </>
    );
}

export default context;