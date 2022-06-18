import React, { FC, FocusEventHandler, useCallback, useState } from 'react'
import './GlobalSearch.scss'
import SearchIcon from "../svg/SearchIcon"
import useFocus from "../../hooks/useFocus"

interface IGlobalSearchProps {
    activeInput: boolean
    toggleFocusInput: (event?: FocusEventHandler<HTMLInputElement> | any) => void
}

const GlobalSearch: FC<IGlobalSearchProps> = ({ activeInput, toggleFocusInput }) => {

    const [inputRef, setInputFocus] = useFocus()
    const [isMobileVersion, setIsMobileVersion] = useState<boolean>(false)
    const [globalSearchValue, setGlobalSearchValue] = useState<string>('')

    const inputIsMobile = useCallback(() => {
        setInputFocus()
        setIsMobileVersion(true)
    }, [])

    const addTaskValue = useCallback((e) => {
         setGlobalSearchValue(e.target.value)
    }, [])

    const checkClickOutSide = useCallback(() => {
        setIsMobileVersion(false)
        toggleFocusInput()
    }, [isMobileVersion])

    return (
        <div className={ !activeInput ? 'header__global_search' : 'header__global_search-active' }>
            <input type="text"
                   value={ globalSearchValue }
                   onChange={ addTaskValue }
                   ref={ inputRef }
                   onFocus={ toggleFocusInput }
                   onBlur={ checkClickOutSide }
            />

            { !isMobileVersion ? <i className="header__search_icon" onClick={ inputIsMobile }>
                <SearchIcon/>
            </i> : null }

        </div>
    )
}

export default GlobalSearch