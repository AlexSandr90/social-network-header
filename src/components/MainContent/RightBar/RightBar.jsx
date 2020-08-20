import React from "react";

import r from './rigthBar.module.css';

const RightBar = () => {

    const {
        item,
        link,
        fake,
        items,
        label,
        filters,
        rightBar,
        itemText,
        checkbox,
        linkActive,
        itemActive,
        checkboxText,
        checkboxItem,
        filtersBlock,
        itemsFilters,
        rightMenuBlock,
    } = r;

    return (
        <aside className={rightBar}>
            <div className={rightMenuBlock}>
                <ul className={items}>
                    <li className={itemActive}>
                        <a className={ linkActive }
                            href="/social-network-header/"
                        >
                            <span className={ itemText }>
                                News
                            </span>
                        </a>
                    </li>
                    <li className={item}>
                        <a className={ link }
                            href="/social-network-header/"
                        >
                            <span className={ itemText }>
                                Photos
                            </span>
                        </a>
                    </li>
                    <li className={item}>
                        <a className={ link }
                            href="/social-network-header/"
                        >
                            <span className={ itemText }>
                                Recommendations
                            </span>
                        </a>
                    </li>
                    <li className={item}>
                        <a className={ link }
                            href="/social-network-header/"
                        >
                            <span className={ itemText }>
                                Search
                            </span>
                        </a>
                    </li>
                    <li className={item}>
                        <a className={ link }
                           href="/social-network-header/"
                        >
                            <span className={ itemText }>
                                Updates
                            </span>
                        </a>
                    </li>
                    <li className={item}>
                        <a className={ link }
                           href="/social-network-header/"
                        >
                            <span className={ itemText }>
                                Comments
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={ filtersBlock }>
                <ul className={itemsFilters}>
                    <div className={filters}>Filters</div>
                    <li className={checkboxItem}>
                        <label className={label} >
                            <input type="checkbox" className={checkbox}/>
                            <span className={fake}/>
                            <span className={checkboxText}>Stories</span>
                        </label>
                    </li>
                    <li className={checkboxItem}>
                        <label className={label} >
                            <input type="checkbox" className={checkbox}/>
                            <span className={fake}/>
                            <span className={checkboxText}>Photos</span>
                        </label>
                    </li>
                    <li className={checkboxItem}>
                        <label className={label} >
                            <input type="checkbox" className={checkbox}/>
                            <span className={fake}/>
                            <span className={checkboxText}>Communities</span>
                        </label>
                    </li>
                    <li className={checkboxItem}>
                        <label className={label} >
                            <input type="checkbox" className={checkbox}/>
                            <span className={fake}/>
                            <span className={checkboxText}>Comments</span>
                        </label>
                    </li>
                </ul>
            </div>

        </aside>
    )
};

export default RightBar;
