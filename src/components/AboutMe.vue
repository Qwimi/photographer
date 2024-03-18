<template>
    <section class="wrapper">
        <div class="about-text">
            <h2 class="title">Обо мне</h2>
            <p>Доброго времени суток, дорогой посетитель!</p>
            <p>
                Меня зовут Борис и я автомобильный фотограф из Москвы.
                Можно было написать много текста, но я уверен, что моё портфолио скажет всё само за себя.
            </p>
            <p>
                Обсудить сотрудничество, детали заказа и договориться о фотосессии можно, связавшись со мной через
                соцсети, указанные ниже.
            </p>
        </div>
        <div class="about-photo">
            <img src="@/assets/about-me-photo.jpg" alt="">
            <div class="about_links">
                <p class="title">Контакты:</p>
                <ul>
                    <li>
                        <a href="https://t.me/UncleVupsen">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_160_33)">
                                    <path
                                        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                        fill="url(#paint0_linear_160_33)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.78987 14.8417C11.1627 12.9365 14.0786 11.6805 15.5375 11.0737C19.7032 9.34102 20.5688 9.04004 21.133 9.0301C21.257 9.02792 21.5345 9.05867 21.7142 9.2045C21.866 9.32763 21.9077 9.49397 21.9277 9.61072C21.9477 9.72746 21.9725 9.99341 21.9528 10.2012C21.727 12.5731 20.7503 18.3289 20.2533 20.9854C20.0431 22.1095 19.6291 22.4864 19.2282 22.5233C18.3572 22.6034 17.6957 21.9476 16.852 21.3946C15.5318 20.5292 14.786 19.9905 13.5045 19.146C12.0235 18.17 12.9836 17.6337 13.8276 16.757C14.0485 16.5276 17.8865 13.0367 17.9608 12.72C17.97 12.6804 17.9787 12.5328 17.891 12.4548C17.8032 12.3769 17.6738 12.4035 17.5804 12.4247C17.448 12.4548 15.3389 13.8488 11.2533 16.6067C10.6547 17.0177 10.1124 17.218 9.62661 17.2075C9.09103 17.196 8.0608 16.9047 7.29492 16.6558C6.35555 16.3504 5.60895 16.189 5.67396 15.6704C5.70782 15.4003 6.07979 15.124 6.78987 14.8417Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_160_33" x1="15" y1="0" x2="15" y2="29.7775"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="white" />
                                    </linearGradient>
                                    <clipPath id="clip0_160_33">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p>
                                Телеграмм
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="https://vk.com/l_b_a">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_160_37)">
                                    <path
                                        d="M0 14.4C0 7.61175 0 4.21766 2.10883 2.10883C4.21766 0 7.61175 0 14.4 0H15.6C22.3883 0 25.7823 0 27.8912 2.10883C30 4.21766 30 7.61175 30 14.4V15.6C30 22.3883 30 25.7823 27.8912 27.8912C25.7823 30 22.3883 30 15.6 30H14.4C7.61175 30 4.21766 30 2.10883 27.8912C0 25.7823 0 22.3883 0 15.6V14.4Z"
                                        fill="white" />
                                    <path
                                        d="M15.9108 21.6C8.9409 21.6 4.96545 16.8703 4.7998 9H8.29112C8.4058 14.7766 10.9796 17.2234 13.0184 17.7279V9H16.3059V13.982C18.3192 13.7676 20.4341 11.4973 21.1476 9H24.4352C23.8872 12.0775 21.5937 14.3477 19.9627 15.2811C21.5937 16.0378 24.2059 18.018 25.1998 21.6H21.5809C20.8037 19.2036 18.8671 17.3496 16.3059 17.0973V21.6H15.9108Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_160_37">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p>
                                Группа в вк
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">

</script>
<style scoped>
p {
    font-size: 1.5em;
    margin-bottom: 0.5em;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1.25rem;
}

.about-text {
    grid-column: span 3;
}

.about-photo {
    grid-column: 5/8;
    aspect-ratio: 3/4;
    position: relative;

}

@media screen and (max-width: 1024px) {
    .about-photo {
        grid-column: 4/8;
    }

    p {
        font-size: 1.25em;
    }

}

@media screen and (max-width: 768px) {
    .about-photo {
        float: right;
    }

    p {
        font-size: 1em;
    }

}

@media screen and (max-width: 425px) {
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 1.25em;
    }

}


.about-photo img {
    width: 100%;
    object-fit: cover;
}

.about_links {
    background-color: #4C4C4C;
    padding: 1.5rem 2.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}

.about_links .title {
    font-size: 1.25em;
    margin-bottom: 1rem;
}

.about_links a {
    color: white;
    text-decoration: none;
    display: flex;
    gap: 0.55em;
    align-items: center;
}

.about_links a svg{
    height: 2rem;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

ul p {
    margin: 0;
}
</style>