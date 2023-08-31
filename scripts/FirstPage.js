import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Здесь (news) структура данных товаров, которые я должен получать с сервера 
let news = [
    {
        id: 1,
        sex: "man",
        image: 'image/new/man/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 2,
        sex: "man",
        image: 'image/new/man/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 3,
        sex: "man",
        image: 'image/new/man/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 4,
        sex: "man",
        image: 'image/new/man/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 5,
        sex: "man",
        image: 'image/new/man/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 6,
        sex: "woman",
        image: 'image/new/man/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 7,
        sex: "woman",
        image: 'image/new/woman/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 8,
        sex: "woman",
        image: 'image/new/woman/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 9,
        sex: "woman",
        image: 'image/new/woman/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 10,
        sex: "woman",
        image: 'image/new/woman/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
    {
        id: 11,
        sex: "woman",
        image: 'image/new/woman/image.png',
        name: 'Кроссовки мужские',
        lable: 'Anta sport',
        price: 4500,
    },
];
//Здесь (reviews) структура данных отзывов, которые я полжен получать с сервера
let reviews = [
    {
        id: 1,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 2,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 3,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 4,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 5,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 6,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 7,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 8,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 9,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
    {
        id: 10,
        name: "Вася",
        text: "Все очень круто, рекомендую",
        date: "21.08.2023"
    },
];

let blog = [
    {
        id: 1,
        image: '/image/firstPage/gim.jpg',
        title: 'Title',
        link: '',
        date: new Date()
    },
    {
        id: 2,
        image: '/image/firstPage/gim.jpg',
        title: 'Title',
        link: '',
        date: new Date()
    },
    {
        id: 3,
        image: '/image/firstPage/gim.jpg',
        title: 'Title',
        link: '',
        date: new Date()
    }
]

export default function FirstPage () { // add style in file style.css
    //Эта функция перебирает массив полученный с сервера и ищет объекты с мужской обувью и выводит его 
    function Mans() {
        let arr = [];

        for (let key of news) {

            if (key["sex"] == "man" ) {
                let text = key['name'];
                text = text.toUpperCase();
    
                let item =  
               
                <SwiperSlide key={key['id']} className="update-clothes__item">
                    <div className="update-clothes__image-wrapper">
                        <img 
                            className="update-clothes__image" 
                            src={key["image"]}/>
                    </div>
                   
                   <div className="update-clothes__wrapper">
                        <p className="update-clothes__text">
                            {text}
                            <span className="update-clothes__label">
                                {" "}{key['lable']} 
                            </span>
                        </p>
    
                        <div className="update-clothes__label-price-wrapper">
                            
    
                            <span className="update-clothes__price">
                                {key['price']} &#8381;
                            </span>
                        </div>
                    </div>
                    </SwiperSlide>
                arr.push(item)  
            }
        }
           
               

           

        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={3}
                navigation
                loop={true}
                className="update-clothes__list flex">        
                {arr}
            </Swiper>)
    };
    //Эта функция перебирает массив полученный с сервера и ищет объекты с женской обувью и выводит его 
    function Womans() {
        let arr = [];

        for (let key of news) {
            if (key["sex"] == "woman" ) {
                let text = key['name'];
                text = text.toUpperCase();
    
                let item =  
               
                <SwiperSlide key={key['id']} className="update-clothes__item">
                    <div className="update-clothes__image-wrapper">
                        <img 
                            className="update-clothes__image" 
                            src={key["image"]}/>
                    </div>
                   
                   <div className="update-clothes__wrapper">
                        <p className="update-clothes__text">
                            {text}
                            <span className="update-clothes__label">
                                {" "}{key['lable']} 
                            </span>
                        </p>
    
                        <div className="update-clothes__label-price-wrapper">
                            
    
                            <span className="update-clothes__price">
                                {key['price']} &#8381;
                            </span>
                        </div>
                    </div>
                    </SwiperSlide>
                arr.push(item)  
            }
        }


        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={3}
                navigation
                loop={true}
                className="update-clothes__list flex">        
                {arr}
            </Swiper>)
    };
    //Эта функция перебирает массив полученный с сервера  и выводит его 
    function Blog () {
        let arr = [];

        for (let key of blog) {
            let item = 
            <SwiperSlide key={key['id']} className="blog__wrapper">
                <a href={key['link']}>
                    <p 
                    className="text-center blog__text" 
                    style={{backgroundImage: 'url(image/firstPage/run.jpeg)'}}>
                        {key['title']} 
                        
                    </p>
                    <span className="blog__date text-center">
                        {key['date'].toDateString()}
                    </span>
                </a>
            </SwiperSlide>

            arr.push(item);
        }   

        return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            loop={true}>
            {arr}
        </Swiper>)
    }
    //Эта функция перебирает массив с отзывами и выводит его 
    function Reviews () {
        let map = reviews.map((item,index,array) => {
            return <li key={item["id"]}>
                <span>
                    {item["name"]}
                </span>
                <p>
                    {item['text']}
                </p>
                <span>
                    {item['date']}
                </span>
            </li>
        })
        console.log()
        return map
    }

    return <div className="firstPage"> 
        <section className="container update-clothes">
            <h2 className="text-center title__h2">НОВИНКИ ДЛЯ МУЖЧИН</h2>

            <Mans/>
        </section>

        <section className="container update-clothes">
            <h2 className="text-center title__h2">НОВИНКИ ДЛЯ ЖЕНЩИН</h2>

            <Womans/>
        </section>

        <section className="sports">
            <h2 className="sr-only">Виды спорта</h2>

            <ul className="container sports__list flex space-between">
                <li className="sports__item text-center">
                    <div className="sports__container run"></div>
                    <p className="sports__text">Бег</p>
                </li>

                <li className="sports__item text-center gim">
                    <div className="sports__container"></div>
                    <p className="sports__text">Гимнастика</p>
                </li>

                <li className="sports__item text-center">
                    <div className="sports__container bike"></div>
                    <p className="sports__text">Велоспорт</p>
                </li>

                <li className="sports__item text-center">
                    <div className="sports__container basketball"></div>
                    <p className="sports__text">Баскетбол</p>
                </li>   

                <li className="sports__item text-center">
                    <div className="sports__container football"></div>
                    <p className="sports__text">Футбол</p>
                </li>

                <li className="sports__item text-center">
                    <div className="sports__container swimming"></div>
                    <p className="sports__text">Плавание</p>
                </li>

                <li className="sports__item text-center">
                    <div className="sports__container fighting"></div>
                    <p className="sports__text ">Борьба</p>
                </li>

                <li className="sports__item text-center">
                    <div className="sports__container street"></div>
                    <p className="sports__text">Уличные виды спорта</p>
                </li>
            </ul>
        </section>

        <section className="blog">
            <h2 className="sr-only">Наш Блог</h2>

            <article className="blog__article">
                <h2 className="text-center title__h2">
                    Наш Блог
                </h2>

                <Blog/>
            </article>
        </section>

        <section className="reviews">
            <h2 className="text-center">
                Отзывы
            </h2>

            <ul>
                <Reviews className='container'/>
            </ul>
            
            {/* <ul className="reviews__list flex space-between">
                <li className="reviews__item">
                    <span className="user-name__reviews"> name user</span>
                    <p className="text__rewiews">
                        text reviews   
                    </p>
                </li>

                <li className="reviews__item">
                    <span className="user__reviews"> name user</span>
                    <p className="text__rewiews">
                        text reviews   
                    </p>
                </li>

                <li className="reviews__item">
                    <span className="user__reviews"> name user</span>
                    <p className="text__rewiews">
                        text reviews   
                    </p>
                </li>
            </ul> */}

            <button onClick={() => {
              

            }}> Оставить отзыв</button>

                <form id="reviews-form">
                    <ul className="reviews-form__list">
                        <li className="reviews-form__item">
                            <input 
                            className="reviews-form__name_input" 
                            type="text" 
                            name="user" 
                            placeholder="Ваше имя"/>
                        </li>

                        <li className="reviews-form__item">
                            <textarea 
                            className="reviews-form__name_textarea" 
                            name="reviews" 
                            placeholder="Отзыв"></textarea>
                        </li>
                    </ul>

                    <button className="close-reviews-form">Закрыть блок с отзывом</button>
                </form>
        </section>
    </div>
}
