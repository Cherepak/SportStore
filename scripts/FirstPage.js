import React from "react";

export default function FirstPage () { // add style in file style.css

   
    return <div className="firstPage"> 
        <section className="container update-clothes">
            <h2 className="text-center title__h2">НОВИНКИ ДЛЯ МУЖЧИН</h2>

            <ul className="update-clothes__list flex space-between">
                <li className="update-clothes__item">
1
                </li>

                <li className="update-clothes__item">
2
                </li>

                <li className="update-clothes__item">
3
                </li>

                <li className="update-clothes__item">
4
                </li>

                <li className="update-clothes__item">
5
                </li>

                <li className="update-clothes__item">
6
                </li>

                <li className="update-clothes__item">
7
                </li>
            </ul>
        </section>

        <section className="container update-clothes">
            <h2 className="text-center title__h2">НОВИНКИ ДЛЯ ЖЕНЩИН</h2>

            <ul className="update-clothes__list flex space-between">
                <li className="update-clothes__item">
1
                </li>

                <li className="update-clothes__item">
2
                </li>

                <li className="update-clothes__item">
3
                </li>

                <li className="update-clothes__item">
4
                </li>

                <li className="update-clothes__item">
5
                </li>

                <li className="update-clothes__item">
6
                </li>

                <li className="update-clothes__item">
7
                </li>
            </ul>
        </section>

        <section className="container sports">
            <h2 className="sr-only">Виды спорта</h2>

            <ul className="sports__list flex space-between">
                <li className="sports__item">

                </li>

                <li className="sports__item">

                </li>

                <li className="sports__item">

                </li>

                <li className="sports__item">

                </li>

                <li className="sports__item">

                </li>

                <li className="sports__item">

                </li>

                <li className="sports__item">

                </li>

                <li className="sports__item">

                </li>
            </ul>
        </section>

        <section className="container reviews">
            <h2 className="text-center">
                Отзывы
            </h2>

            <ul className="reviews__list flex space-between">
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
            </ul>

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

                    {/* document.getElementById("reviews-form").addEventListener("submit", (event) => {
                        event.preventDefault();
                    }); */}

                    <button className="close-reviews-form">Закрыть блок с отзывом</button>
                </form>
        </section>
    </div>
}