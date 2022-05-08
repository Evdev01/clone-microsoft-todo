import React, { FC, FocusEventHandler } from 'react'
import './GlobalSearch.scss'
import CloseIcon from "../svg/CloseIcon"
import SearchIcon from "../svg/SearchIcon"

interface TGlobalSearchProps {
    activeInput: boolean
    toggleFocusInput: (event: FocusEventHandler<HTMLInputElement> | any) => void
}

const GlobalSearch: FC<TGlobalSearchProps> = ({ activeInput, toggleFocusInput }) => {
    return (
        <div className="header__global_search">
            <div className={ !activeInput ? 'reset__icon_wrapper' : 'reset__icon_wrapper-active' }>
                {
                    activeInput
                        ? <i className="header__reset_icon">
                            <CloseIcon/>
                        </i>
                        : null
                }
            </div>
            <input type="text"
                   onFocus={ toggleFocusInput }
                   onBlur={ toggleFocusInput }
            />
            <i className="header__search_icon">
                <SearchIcon/>
            </i>
        </div>
    )
}

export default GlobalSearch