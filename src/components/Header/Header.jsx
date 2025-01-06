import React, { useState } from 'react'
import s from './Header.module.scss'

const Header = () => {

    const [isActive, setIsActive] = useState(false)
    const toggleSearch = () => {
        setIsActive(!isActive)
    }
    const onInputFocus = (e) => {
        e.stopPropagation();
        setIsActive(true);
    };

  return (
    <>
        <header className={s.header}>
            <nav className={s.nav}>
                <a href="" className={s.logo}>DUCATI</a>
                <div className={s.menu}>
                    <a href="">HOME</a>
                    <a href="">CATALOGUE</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </div>

                <div className={`${s.search} ${isActive ? s.active : null}`} onClick={toggleSearch}>
                    <img src="/search.svg" alt="" />
                    <input onClick={onInputFocus} type="text" placeholder='Search...' />

                </div>

            </nav>

            <div className={s.wrap}>
                <div className={s.card}>
                    <button className={s.next}></button>

                    <div className={s.box}>
                        <h1 className={s.title}>
                            DUCATI
                            <img src="/moto-1.png" alt="" />
                        </h1>

                        <button>READ MORE</button>

                        <div className={s.inner}>
                            <div>215
                            CV</div>
                            <div>300
                            km/h</div>
                            <div>NPX 
                            25/30</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header