import React, { FC, useState } from 'react'
import './GlobalSearch.scss'
import SearchIcon from "../svg/SearchIcon"
import useFocus from "../../hooks/useFocus"

interface TGlobalSearchProps {
    activeInput: boolean
    toggleFocusInput: any
    // toggleFocusInput: (event: FocusEventHandler<HTMLInputElement> | any) => void
}

const GlobalSearch: FC<TGlobalSearchProps> = ({ activeInput, toggleFocusInput }) => {


    const [inputRef, setInputFocus] = useFocus()
    const [isMobileVersion, setIsMobileVersion] = useState<boolean>(false)
    const [globalSearchValue, setGlobalSearchValue] = useState<string>('')

    const inputIsMobile = () => {
            setInputFocus()
        setIsMobileVersion(true)
    }


const x = () => {
    setIsMobileVersion(false)
    toggleFocusInput()
}

    return (
        <div className={ !activeInput ? 'header__global_search' : 'header__global_search-active' }>
            <input type="text"
                   value={ globalSearchValue }
                   onChange={ e => setGlobalSearchValue(e.target.value) }
                   ref={ inputRef }
                   onFocus={toggleFocusInput }
                   onBlur={ x }
            />

            {!isMobileVersion ? <i className="header__search_icon" onClick={inputIsMobile}>
                <SearchIcon/>
            </i> : null}

        </div>
    )
}

export default GlobalSearch