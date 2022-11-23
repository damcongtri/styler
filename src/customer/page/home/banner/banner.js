import React from 'react';
import { Carousel } from 'antd';
import clsx from 'clsx';
import style from "./banner.module.scss";
import { Link } from 'react-router-dom';

function Banner() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    // const im = ''
    return (<>
        <div className={clsx(style.banner)}>
            <Carousel afterChange={onChange}>
                <div className={clsx(style.item)}>
                    <div className={clsx(style.content, style.right)}>
                        <span className={style.title}>Winter collection #2022</span>
                        <h1 className={style.name}>Modern Pastel Colors</h1>
                        <Link to="/shop" className={clsx(style.btn_shop)}><span>Shop Now <i class="fa-solid fa-chevron-right"></i></span> </Link>
                    </div>
                </div>
            </Carousel>
        </div>
    </>);
}

export default Banner;